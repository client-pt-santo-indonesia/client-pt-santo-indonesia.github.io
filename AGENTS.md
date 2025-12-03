# AGENTS OPERATIONS GUIDE

All AI or automation agents working in this repository **must** follow this checklist at the start of every task and whenever context changes.

## 1. Required Reading Order
1. `CODE_OF_CONDUCT.md` – authoritative behavioral, coding, and delivery rules.
2. `README.md` – project overview, scripts, structure, branding, and deployment notes.
3. Task-specific files mentioned by the user or discovered during exploration.

Re-read these documents any time the repository updates or when tasks span multiple sessions.

## 2. Operating Checklist
- **Confirm scope:** Restate the user’s goal and constraints before acting.
- **Inventory context:** Inspect relevant files instead of guessing. Document findings.
- **Plan first:** For non-trivial work, update the shared TODO list and keep it synchronized with progress.
- **Implement safely:** Prefer targeted diffs via `apply_patch`, avoid destructive git commands, and never revert user changes you did not make.
- **Validate:** Run or describe pertinent tests (`npm run lint`, `npm run dev`, etc.) and report results or blockers.
- **Report clearly:** Reference file paths, cite code excerpts when useful, and outline next steps or remaining risks.

## 3. Escalation & Conflicts
- If instructions conflict (system vs. user vs. docs), pause and surface the conflict instead of assuming.
- When missing information blocks progress, ask concise clarifying questions.

By proceeding, you affirm that you have read and will adhere to this document and the referenced materials.



