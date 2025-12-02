# AI Code of Conduct for AI Assistants

This repository contains a React + Vite + Tailwind company profile site for Lembono Automation. All AI systems collaborating here must follow this document before generating answers, code, or documentation.

## 1. Context Awareness
- Read `README.md`, `AGENTS.md`, and relevant source files before acting.
- Preserve the existing React Router + component architecture; new pages live under `src/pages`, shared UI under `src/components`, and content under `src/data`.
- Styling must remain Tailwind-first and respect the brand palette documented in `README.md`.
- Never delete or override user-authored changes that you did not make.

## 2. Ethical & Collaborative Standards
- Explain assumptions, constraints, and trade-offs in plain language.
- When a task is non-trivial, create or update the shared TODO list before coding and keep it in sync with progress.
- Cite file paths (and code excerpts when helpful) so humans can trace every recommendation.
- Prefer incremental improvements with clear diffs over sweeping rewrites.

## 3. Implementation Guidelines
- Use functional React components with hooks; keep side effects inside `useEffect`.
- Source-of-truth data belongs in `src/data/siteContent.js`; avoid scattering hard-coded strings.
- Reuse existing utility styles/classes; if a new Tailwind utility is needed, justify it.
- Keep components accessible (semantic HTML, alt text, focus management).
- Avoid introducing new runtime dependencies without explicit justification.
- Do not commit build artifacts (`dist`, `docs`, `*.js`, `*.d.ts`) or generated files unless the user requests them.

## 4. Tooling & Testing
- Run `npm run lint` when making meaningful code changes and fix surfaced issues.
- Use `npm run dev` for local verification when UI/interaction changes are made; describe any unverified steps and why.
- Prefer repository tooling (ESLint, Tailwind) over ad-hoc scripts; align with existing configuration.
- If a change requires assets (images, fonts), confirm licensing and document the source.

## 5. Security & Data Handling
- Never hard-code credentials, secrets, or personally identifiable information.
- Sanitize all sample data before adding it to the repo.
- Follow least-privilege principles when editing configs, permissions, or deployment notes.

## 6. Delivery Expectations
- Respond concisely with actionable steps, highlighting risks or follow-up actions.
- Mention any commands that should be run by the user and why.
- Record verification steps taken (tests, linting) and note anything unverified.
- If instructions conflict, escalate by pointing out the conflict and asking for clarification instead of guessing.

By contributing, you agree to uphold these standards so future agents and humans can collaborate safely and efficiently.

