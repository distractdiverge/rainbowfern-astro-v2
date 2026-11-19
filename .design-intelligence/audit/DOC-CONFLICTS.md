# Doc conflicts: design-intelligence review (2026-11-19)

Mismatches found after the owner's 2026-11-19 edits to [[voice]] and [[principles]], checked against [[system]], [[audience]], [[direction]], [[content-strategy]], [[legibility]], decision 003, `tokens/`, `OUTSTANDING-CONSIDERATIONS.md` and the site code.

Legend: [ ] open, [x] resolved, with the date and what changed. Work top to bottom. Items marked *needs owner* need a decision before they can be fixed.

## Caused by the 2026-11-19 edits

- [x] **C1 Hosting and analytics.** `principles.md` said analytics is "hosted on Netlify." That clashed with Outstanding #7 (analytics tool undecided), `/privacy` (`[TBD: name the analytics tool]`), and "hosted independently" in the `voice.md` colophon line and the `content-strategy.md` colophon note.
  - *Resolved 2026-11-19:* the site is hosted on Netlify, with its optional data-collecting features turned off, and that won't change in the near term. Owner rationale: nearly free, serverless hosting at minimal cost. No analytics runs yet, so #7 stays open. Updated: `principles.md`, `voice.md`, `content-strategy.md`, `system.md`, `OUTSTANDING-CONSIDERATIONS.md`, `src/pages/privacy.astro`.
- [x] **C2 "Trust and contact" status is ambiguous.** The "Proposed 2026-11-12" label was removed from that heading in `principles.md`, which reads as confirming the whole section, but only the skip-link bullet says "Confirmed 2026-11-19."
  - Stale as a result: the `principles.md` status line, `system.md` Phase 2 ("trust, contact and voice rules are proposed"), the `voice.md` status line ("the rest is proposed"), and Outstanding #11.
  - There's no decision record for 2026-11-19. Decisions 001–003 suggest a `decisions/004`.
  - *Resolved 2026-11-19:* the owner confirmed all "Trust and contact" rules except the body measure, which stays proposed under C7. The owner also confirmed the conversion anti-patterns. Recorded in `decisions/004-owner-decisions-2026-11-19.md`, which also covers C1's Netlify decision.
  - Updated: the `principles.md` status line and both headings, `system.md` (Phase 2, Rejected, decisions list), and Outstanding #11 plus a Resolved row.
  - The `voice.md` status line turned out to be accurate, since voice wasn't part of this decision. It's left as is, and Outstanding #11 still tracks it.
- [x] **C3 The AI-use line lost its disclosure promise.**
  - `voice.md` changed "I use AI tools as collaborators, and I tell you where and how" to "…enhance existing skills, and tell you where and how to do the same yourself." The disclosure was the mechanism; `principles.md` lists "AI use" under "Show values as policies."
  - The new line is missing an "I" ("and *I* tell you").
  - `src/pages/about.astro:20` still has the old line.
  - *Resolved 2026-11-19:* the owner chose a combined line that keeps the disclosure and adds teaching: "I use AI tools to extend skills I already have, not to replace them. I tell you where I used them on your work, and I'll show you how to do the same yourself." Updated in `voice.md` (values lines) and `src/pages/about.astro` ("How I work"). The "AI use" policy in `principles.md` needed no change.
- [ ] **C4 The new "My aim…" line pulls toward mentees.** *Needs owner.*
  - "Those just entering tech or trying to build something" puts mentees front and centre, but they're priority 2 in `audience.md` and decision 002. Small-business owners and founders are priority 1.
  - "Decades" needs to be true and consistent with the "15+ years" claim in `content-strategy.md`.
- [ ] **C5 The PayPal Credit timeline doesn't match the case studies.** *Needs owner.*
  - The `voice.md` Proof copy note says the move to PayPal Credit happened as part of the Swift Financial acquisition.
  - The case files say PayPal (Business Financing Solutions) from 2017 to 2019, then PayPal Credit from 2019 to 2023.
  - Separately, "15+ years at PayPal" in `content-strategy.md` (Home intro and draft copy) can't be right if PayPal started in 2017.
- [ ] **C6 The neurodivergent accessibility pointer is dangling.**
  - `audience.md` says accessibility is "Expanded for neurodivergent readers in [[principles]]," but `principles.md` has no neurodivergent rules. The 2026-11-08 archive doesn't either.
  - The new parenthetical names "autistic, neurotypical" but not neurodivergent readers more broadly, such as ADHD or dyslexia.
  - Fix by adding concrete rules or correcting the pointer.

## Older mismatches

- [ ] **C7 Body measure: three different values.** `principles.md` says 550 to 700px. `tokens/typography.json` says `prose_max: 65ch`. `src/layouts/Layout.astro` uses `max-w-3xl` with `px-6`, which gives about 720px of content.
- [ ] **C8 `purple-700` isn't a token.** `principles.md` names it for accent text on light, but `tokens/colors.json` defines `accent` and has no `purple-700`.
- [ ] **C9 Vocabulary vs personality words.** `audience.md`'s personality words include "inclusive," but the vocabulary list in `voice.md` and `principles.md` doesn't.

## Typos and small fixes

- [ ] **C10** In `voice.md`: "colour" should be "color" (in the readability rule), "ot" should be "to" (in the testimonials line), and "SwiftFinancial" should be "Swift Financial."
- [ ] **C11** In `principles.md`: "accomodated" should be "accommodated." (The heading "trust and contact" was fixed under C2.)

Related: [[OUTSTANDING-CONSIDERATIONS]], [[system]]
