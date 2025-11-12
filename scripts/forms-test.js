#!/usr/bin/env node

/**
 * Form wiring test:
 * Ensures every contact form in the project posts to the shared FORM_ENDPOINT
 * and includes the required hidden FormSubmit configuration fields.
 */

const fs = require('fs');
const path = require('path');

const FORM_ENDPOINT = 'action={FORM_ENDPOINT}';
const HIDDEN_FIELDS = ['name="_subject"', 'name="_template"', 'name="_captcha"'];

const targets = [
  { file: 'components/Contact.jsx', label: 'Contact section forms', expectMultiple: true },
  { file: 'components/Header.jsx', label: 'Header dialog form', expectMultiple: false },
];

const missing = [];

targets.forEach(({ file, label, expectMultiple }) => {
  const filePath = path.join(__dirname, '..', file);
  const source = fs.readFileSync(filePath, 'utf8');

  if (!source.includes(FORM_ENDPOINT)) {
    missing.push(`${label}: missing FORM_ENDPOINT binding`);
    return;
  }

  HIDDEN_FIELDS.forEach((field) => {
    if (!source.includes(field)) {
      missing.push(`${label}: missing ${field}`);
    }
  });

  if (expectMultiple) {
    const occurrences = source.match(/action=\{FORM_ENDPOINT\}/g) || [];
    if (occurrences.length < 2) {
      missing.push(`${label}: expected at least two forms targeting FORM_ENDPOINT`);
    }
  }

});

if (missing.length) {
  console.error('❌ Form wiring test failed:');
  missing.forEach((msg) => console.error(`  - ${msg}`));
  process.exit(1);
}

console.log('✅ All contact forms point to the same backend and include required hidden fields.');
