// scripts/remote-auth-verify.js
// Remote Better Auth & Membership Verification against workers.dev candidate

const CANDIDATE_URL = 'https://kindwell-app.adamstratmeyer.workers.dev';
const TEST_EMAIL = 'remote_test_' + Math.random().toString(36).slice(2, 10) + '@kindwell.org';
const TEST_PASS = 'remotePassword123!';
const TEST_NAME = 'Remote Test Seeker';

async function verifyRemoteAuth() {
  console.log('Testing remote Better Auth on candidate:', CANDIDATE_URL);
  console.log('Test email:', TEST_EMAIL);

  // 1. Registration
  const regForm = new URLSearchParams();
  regForm.set('name', TEST_NAME);
  regForm.set('email', TEST_EMAIL);
  regForm.set('password', TEST_PASS);
  regForm.set('locale', 'en');

  const regRes = await fetch(`${CANDIDATE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: regForm.toString(),
    redirect: 'manual'
  });

  console.log('Register HTTP status:', regRes.status, 'Location:', regRes.headers.get('location'));
  const rawCookie = regRes.headers.get('set-cookie');
  console.log('Received Cookie header:', Boolean(rawCookie));

  // Extract session token
  const tokenMatch = rawCookie?.match(/kindwell_session=([^;]+)/);
  const sessionToken = tokenMatch ? tokenMatch[1] : null;
  console.log('Extracted session token:', sessionToken ? sessionToken.slice(0, 8) + '...' : 'NONE');

  if (!sessionToken) {
    throw new Error('No session cookie returned on registration!');
  }

  // 2. Access Authenticated Dashboard
  const dashRes = await fetch(`${CANDIDATE_URL}/account`, {
    headers: { 'Cookie': `kindwell_session=${sessionToken}` }
  });
  const dashHtml = await dashRes.text();
  const hasWelcome = dashHtml.includes(`Welcome, ${TEST_NAME}`);
  const hasTier = dashHtml.includes('free Tier Member');
  console.log('Dashboard authenticated view:', { hasWelcome, hasTier });

  // 3. Upgrade Membership (Mock PayPal subscription)
  const subForm = new URLSearchParams();
  subForm.set('tier', 'kind');

  const subRes = await fetch(`${CANDIDATE_URL}/api/membership/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cookie': `kindwell_session=${sessionToken}`
    },
    body: subForm.toString(),
    redirect: 'manual'
  });
  console.log('Subscribe HTTP status:', subRes.status, 'Location:', subRes.headers.get('location'));

  // 4. Verify Upgraded Dashboard
  const dashUpgraded = await fetch(`${CANDIDATE_URL}/account`, {
    headers: { 'Cookie': `kindwell_session=${sessionToken}` }
  });
  const upHtml = await dashUpgraded.text();
  const hasKindTier = upHtml.includes('kind Tier Member') || upHtml.includes('Current plan: kind');
  console.log('Upgraded dashboard view:', { hasKindTier });

  // 5. Logout
  const logoutRes = await fetch(`${CANDIDATE_URL}/api/auth/logout`, {
    method: 'POST',
    headers: { 'Cookie': `kindwell_session=${sessionToken}` },
    redirect: 'manual'
  });
  console.log('Logout HTTP status:', logoutRes.status);

  // 6. Access Dashboard After Logout
  const postLogout = await fetch(`${CANDIDATE_URL}/account`, {
    headers: { 'Cookie': `kindwell_session=${sessionToken}` }
  });
  const postLogoutHtml = await postLogout.text();
  const isLoggedOut = postLogoutHtml.includes('Sign in') && !postLogoutHtml.includes(TEST_NAME);
  console.log('Post-logout unauthenticated view:', { isLoggedOut });

  return { success: hasWelcome && hasKindTier && isLoggedOut, email: TEST_EMAIL };
}

verifyRemoteAuth()
  .then(res => console.log('Remote Auth Verification Result:', res))
  .catch(err => {
    console.error('Remote Auth Verification Failed:', err);
    process.exit(1);
  });
