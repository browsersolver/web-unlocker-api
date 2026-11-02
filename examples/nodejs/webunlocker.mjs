// Web Unlocker API – Node.js example (Node 18+, ES module)
// Usage: BROWSERSOLVER_API_KEY=your-key node webunlocker.mjs

const headers = { "x-api-key": process.env.BROWSERSOLVER_API_KEY, "Content-Type": "application/json" };

const params = new URLSearchParams({
  "query": "https://www.decathlon.fr/p/perceuse-sans-fil/_/R-p-8781921",
});
const response = await fetch(`https://api.browsersolver.com/v1/website/webunlocker?${params}`, { headers });
if (!response.ok) {
  console.error(`HTTP ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
