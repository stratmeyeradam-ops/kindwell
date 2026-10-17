// Deploy to Hostinger Node.js hosting.
//   1. package the app source (src/, public/, package*.json) into app.zip;
//      Hostinger runs npm install for the runtime dependencies
//   2. upload it to the site's public_html over TUS (same flow as @hostinger/mcp)
//   3. push env vars from .env.hostinger
//   4. start a build with explicit settings (auto-detection picks "vite",
//      which drops the server and leaves the site 503-ing)
// Usage: HOSTINGER_API_TOKEN=... node scripts/deploy-hostinger.mjs
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, statSync, cpSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const DOMAIN = "kindwell.org";
const API = "https://developers.hostinger.com";
const TOKEN = process.env.HOSTINGER_API_TOKEN;
if (!TOKEN) throw new Error("HOSTINGER_API_TOKEN is required.");

async function api(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { authorization: `Bearer ${TOKEN}`, "content-type": "application/json", accept: "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${text.slice(0, 400)}`);
  return text ? JSON.parse(text) : null;
}

// 1. package
// The digital deliverables are paid goods: they are generated on every deploy
// so private/digital/*.pdf always matches what /api/download serves.
execFileSync("python3", ["scripts/generate-digital-deliverables.py"], { stdio: "inherit" });

const stage = mkdtempSync(join(tmpdir(), "gip-deploy-"));
const app = join(stage, "app");
mkdirSync(app);
for (const entry of ["src", "public", "private", "package.json", "package-lock.json"]) {
  cpSync(entry, join(app, entry), { recursive: true, dereference: true });
}
const archive = join(stage, "app.zip");
execFileSync("zip", ["-qr", archive, "."], { cwd: app });
console.log(`archive ${(statSync(archive).size / 1024).toFixed(0)} KiB`);

// 2. upload
const site = (await api("GET", "/api/hosting/v1/websites")).data.find((w) => w.domain === DOMAIN);
if (!site) throw new Error(`${DOMAIN} is not a website on this account.`);
const username = site.username;
const creds = await api("POST", "/api/hosting/v1/files/upload-urls", { username, domain: DOMAIN });
const target = `${creds.url.replace(/\/$/, "")}/app.zip?override=true`;
const bytes = readFileSync(archive);
const tusHeaders = { "X-Auth": creds.auth_key, "X-Auth-Rest": creds.rest_auth_key, "Tus-Resumable": "1.0.0" };
let res = await fetch(target, { method: "POST", headers: { ...tusHeaders, "upload-length": String(bytes.length), "upload-offset": "0" } });
if (res.status !== 201) throw new Error(`upload create -> ${res.status}: ${await res.text()}`);
res = await fetch(target, { method: "PATCH", headers: { ...tusHeaders, "upload-offset": "0", "content-type": "application/offset+octet-stream" }, body: bytes });
if (res.status !== 204 && res.status !== 200) throw new Error(`upload data -> ${res.status}: ${await res.text()}`);
console.log("uploaded app.zip");

// 3. env vars (full replace; values never come back from the API)
const envFile = readFileSync(".env.hostinger", "utf8");
const env_vars = envFile.split("\n").map((l) => l.trim()).filter((l) => l && !l.startsWith("#")).map((l) => {
  const i = l.indexOf("=");
  return { key: l.slice(0, i), value: l.slice(i + 1) };
});
const base = `/api/hosting/v1/accounts/${username}/websites/${DOMAIN}/nodejs/builds`;
await api("PUT", `${base}/settings/env`, { env_vars });
console.log(`env: ${env_vars.map((v) => v.key).join(", ")}`);

// 4. build with explicit settings, and store them for future builds
const settings = { node_version: 24, app_type: "express", root_directory: ".", output_directory: ".", build_script: "build", entry_file: "src/server.js", package_manager: "npm" };
await api("PUT", `${base}/settings`, settings);
const build = await api("POST", base, { ...settings, source_type: "archive", source_options: { archive_path: "app.zip" } });
const uuid = build.uuid ?? build.data?.uuid;
console.log(`build ${uuid} started`);

for (let i = 0; i < 60; i++) {
  await new Promise((r) => setTimeout(r, 5000));
  const detail = await api("GET", `${base}/${uuid}`);
  const state = detail.state ?? detail.data?.state;
  process.stdout.write(`${state} `);
  if (state === "completed" || state === "failed") {
    console.log();
    const logs = await api("GET", `${base}/${uuid}/logs`).catch(() => null);
    console.log((logs?.logs ?? "").split("\n").slice(-15).join("\n"));
    if (state === "failed") process.exit(1);
    break;
  }
}
