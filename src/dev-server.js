// Development uses the same persistent runtime as production.
process.env.PORT ||= '8787';
await import('./server.js');
