#!/usr/bin/env bash
# Web Unlocker API – cURL example
# Usage: BROWSERSOLVER_API_KEY=your-key bash webunlocker.sh
set -euo pipefail

curl -sS -G "https://api.browsersolver.com/v1/website/webunlocker" \
  -H "x-api-key: ${BROWSERSOLVER_API_KEY}" \
  --data-urlencode query=https://www.decathlon.fr/p/perceuse-sans-fil/_/R-p-8781921
