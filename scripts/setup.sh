#!/usr/bin/env bash
set -euo pipefail

# Simple setup helper for Fedora (or any Linux) to get the project ready.
# 1. Removes node_modules + lockfile to avoid stale React 17 deps.
# 2. Installs npm deps with the versions defined in package.json.

echo "→ Cleaning existing dependencies…"
rm -rf node_modules package-lock.json

echo "→ Installing npm packages…"
npm install

echo "✅ Setup complete. You can now run 'npm run build' or 'npm start'."
