# 004: Owner decisions, 2026-11-19

**Date:** 2026-11-19
**Status:** Recorded. Raised by the doc-conflicts review in `audit/DOC-CONFLICTS.md` (C1, C2).

| # | Decision | Outcome | Where it shows up |
|---|---|---|---|
| 1 | Trust and contact rules | **Confirmed:** first-screen `<h1>` and literal paragraph, a price on every offer linked to `/pricing`, the three doors, values as policies, honest and dated `/now`, a main nav of 7 items at most, a skip link with landmarks and one `<h1>` per page, and SVG icons instead of emoji. | [[principles]] |
| 2 | Body measure (550 to 700px) | **Still proposed.** The value conflicts with the `65ch` typography token and the ~720px layout. Settle it under DOC-CONFLICTS C7. | [[principles]], `tokens/typography.json` |
| 3 | Conversion anti-patterns | **Confirmed:** no abstract heroes; no pop-ups, countdowns or false scarcity; no autoplay or background motion; at most three optional questions before human contact; no emoji in headings or buttons; never phone-only or scheduler-only contact; no values as slogans; no placeholder pages. | [[principles]], [[system]] |
| 4 | Hosting | **Netlify,** with its optional data-collecting features turned off. Nearly free serverless hosting, not changing in the near term. No analytics run yet; the tool stays open (Outstanding #7). | [[principles]], [[voice]], [[content-strategy]], `/privacy` |

Not decided here: the proposed parts of [[voice]]. They're still tracked in Outstanding #11.

Related: [[003-owner-decisions-2026-11-12]], [[system]]
