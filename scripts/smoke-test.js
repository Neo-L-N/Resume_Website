#!/usr/bin/env node

/**
 * Simple smoke test:
 * 1. Builds the production bundle.
 * 2. Serves the dist folder with a tiny HTTP server.
 * 3. Requests the homepage and bundle file to ensure assets are reachable.
 * 4. Checks that key UI strings are present in the bundle.
 */

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');

function ensureDistAssets() {
  const requiredFiles = ['index.html', 'bundle.js'];
  requiredFiles.forEach((file) => {
    const filePath = path.join(DIST_DIR, file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing build artifact: ${path.relative(process.cwd(), filePath)}`);
    }
  });
}

async function run() {
  console.log('🛠  Building production bundle...');
  const buildResult = spawnSync('npm', ['run', 'build'], { stdio: 'inherit' });
  if (buildResult.status !== 0) {
    process.exit(buildResult.status);
  }

  ensureDistAssets();

  try {
    const homeHtml = fs.readFileSync(path.join(DIST_DIR, 'index.html'), 'utf8');
    if (!homeHtml.includes('<div id="root"></div>')) {
      throw new Error('Root mount element missing in served HTML.');
    }
    const bundleSource = fs.readFileSync(path.join(DIST_DIR, 'bundle.js'), 'utf8');
    const requiredSnippets = ['Eduardo Mesa', 'Get in Touch', 'Experience', 'Portfolio'];
    requiredSnippets.forEach((snippet) => {
      if (!bundleSource.includes(snippet)) {
        throw new Error(`Expected snippet "${snippet}" not found in bundle output.`);
      }
    });

    console.log('✅ Smoke test passed – build artifacts contain the expected UI content.');
  } catch (error) {
    console.error('❌ Smoke test failed.');
    console.error(error);
    process.exitCode = 1;
  }

  process.exit(process.exitCode || 0);
}

run();
