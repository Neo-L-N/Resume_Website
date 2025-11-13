# Resume Website

Modern single-page portfolio showcasing Eduardo Mesa’s experience, projects, and skills.  
Live site: https://eduardo-mesa-portfolio.onrender.com

## Tech Stack
- React 18 + custom UI components
- Tailwind CSS
- Webpack + Babel build pipeline
- Radix UI primitives, Lucide icons, Framer Motion

## Getting Started
```bash
npm run setup        # removes old deps + installs (Fedora helper)
npm install           # install dependencies
npm start             # run webpack-dev-server on http://localhost:9000
```

## Production Build
```bash
npm run build         # emits dist/index.html + bundle.js
```

## Testing & Smoke Checks
- `npm run test:smoke` – builds the site then inspects `dist` assets to ensure key UI copy is present.  
- `npm run test:forms` – verifies every contact form points to the shared FormSubmit backend and includes required hidden fields.  
- `npm test` – runs both checks in sequence.

## Contact Forms
All contact entry points (header dialog, contact dialog, inline form) POST to the FormSubmit endpoint defined in `components/constants.js`. Update that file if you need to change the email target; the tests above will confirm everything stays in sync.
