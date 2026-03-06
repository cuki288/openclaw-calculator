# Architecture Decisions Records (ADR)

## ADR-001: Mock Mode for Demo
- **Status:** Accepted
- **Context:** GitHub Pages only supports static files. We need to show functionality without a running backend.
- **Decision:** Modified `App.tsx` to simulate API calls with `setTimeout` and return hardcoded JSON.
- **Consequences:** Real backend integration is paused for the demo branch.

## ADR-002: Tailwind CSS
- **Status:** Accepted
- **Decision:** Use Tailwind for rapid UI development and consistent theming.
- **Note:** Requires `postcss.config.js` for proper build.
