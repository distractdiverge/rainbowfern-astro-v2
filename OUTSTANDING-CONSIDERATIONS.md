# Outstanding Considerations: rainbowfern-astro-v2

Repo-wide list of open items, parked decisions and things to re-review. Check it at the start of any session that touches site content, pricing or positioning. When an item is settled, move it to **Resolved** with the date and where the decision lives.

> **Location:** This file now lives at the repo root. The move from `.design-intelligence/` is done, and the link in `.design-intelligence/system.md` has been updated.

## Open

| # | Item | Status | Next step | Related |
|---|---|---|---|---|
| 1 | **Re-review the offer names** (Codebase Map, Small-business systems, Mentoring and coaching, Unstuck sessions) | Kept for now (2026-11-12) | Revisit after the first few client conversations: do people repeat the names back, or describe the offer in other words? | `.design-intelligence/foundations/content-strategy.md` |
| 2 | **Prices** | TBD. `[PRICE TBD]` placeholders in place | Fill from the Rainbowfern Rate Sheet: Codebase Map from-price; Small-business systems from-price; Unstuck session 60 and 90 min; mentoring standard rate and floor; solidarity-rate capacity (e.g. "2 at a time"); optional fee-allocation percentages. Then search the repo for `[PRICE TBD]`. | content-strategy, `/pricing` |
| 3 | **PPP case study: what can be disclosed** | TBD | Decide how much detail is safe. If too little, lead `/cases` with a fallback project (list in content-strategy) and keep PPP as a one-line mention. | content-strategy |
| 4 | **Published email** | contact@rainbowfern.com chosen, astrid@ for direct replies | Set up contact@ (Proton) and confirm it forwards or is checked. Make sure hello@ stays for automated mail only. | content-strategy |
| 5 | **Phase out "Alex"** | Decided (use "Astrid Lapinski") | Search `src/` and `public/` for "Alex" (copy, `<title>`, meta, footer, JSON-LD, résumé PDF) and replace. Legal paperwork only keeps it. | `.design-intelligence/system.md` |
| 6 | **Anti-capitalist signals: which ones to use** | Approach decided (subtle, hidden in plain sight) | Pick 3 or 4 signals from the voice guide (e.g. solidarity rate, "pay what your situation allows," fee allocation, "bread and roses" easter egg, colophon). Avoid stacking them on one page. | `.design-intelligence/foundations/voice.md` |
| 7 | **Analytics tool** | None running (2026-11-19). Site is hosted on Netlify | If analytics are wanted, choose one: cookieless, no personal data, ideally self-hosted or a small values-aligned provider (e.g. GoatCounter, Plausible, Umami). Name it on `/privacy`, which currently says no analytics run. | principles, `/privacy` |
| 8 | **AI crawler stance** | Allow all, for search and training (2026-11-12) | Revisit if the ethical-AI stance changes or a training opt-out becomes meaningful. Keep `robots.txt` open until then. | `.design-intelligence/foundations/legibility.md` |
| 9 | **Testimonials** | Not started | Ask past mentees and colleagues for 2 to 4 short testimonials: full name and title, about a concrete change. | voice |
| 10 | **Scheduler** | Calendly in use | Optional: evaluate an open-source scheduler for values alignment. | content-strategy |
| 11 | **Confirm the remaining proposed rules** | Principles done 2026-11-19, except the body measure. Voice still proposed | Settle the body measure (DOC-CONFLICTS C7). Review voice's proposed parts (rules, vocabulary additions, values lines, signals) and mark each confirmed or rejected. | voice, `.design-intelligence/decisions/004-owner-decisions-2026-11-19.md` |

## Resolved

| Date | Item | Outcome | Where |
|---|---|---|---|
| 2026-11-12 | Primary audience | Clients first. Recruiters go to `/cv`. The old recruiter-first version was discarded and archived. | `.design-intelligence/decisions/002-clients-first.md` |
| 2026-11-12 | Anti-capitalism as a core value | As anti-capitalist and pro-socialist as possible. No ads, no trackers beyond basic analytics. Subtle on the site. | `.design-intelligence/decisions/003-owner-decisions-2026-11-12.md` |
| 2026-11-12 | Name on the site | Astrid Lapinski | decision 003 |
| 2026-11-12 | AI crawlers | Allowed, for search and training | decision 003 |
| 2026-11-19 | Principles: trust and contact, conversion anti-patterns | Confirmed, except the body measure (pending C7) | `.design-intelligence/decisions/004-owner-decisions-2026-11-19.md` |
| 2026-11-19 | Hosting | Netlify, with optional data-collecting features off. Nearly free serverless hosting; not changing in the near term. | `.design-intelligence/foundations/principles.md`, `.design-intelligence/audit/DOC-CONFLICTS.md` (C1) |
