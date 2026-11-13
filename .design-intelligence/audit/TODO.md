# TODO: audit remediation (work top to bottom; one commit per task)

Legend: [ ] open, [x] done. Each task cites AUDIT items.

## Foundations (shared layout, metadata, tokens)

- [x] T01 Skip link and main id. Add visually-hidden-until-focus "Skip to main content" link first in body in src/layouts/Layout.astro, target `#main`; add id="main" to main. (AUDIT 9)
- [x] T02 Touch targets to 44px. Logo link, "View all projects", theme switch, hamburger, "← All projects" on project pages get min-h-11 / padding without changing look. (AUDIT 10)
- [x] T02b Remaining touch targets. Desktop nav links in src/components/Header.astro are 43px: add min-h-11 (keep px-3 and look). Project page "Code →" and asset links in src/pages/projects/[id].astro are 20-27px: make them inline-flex min-h-11 items-center. Verify with the eval snippet in T02. (AUDIT 10)
- [x] T03 Global reduced-motion rule. Add the motion.json rule to src/styles/global.css (animation/transition duration 0.01ms, iteration 1, scroll-behavior auto). Verify mobile menu slide has no transition under reduced motion. Do NOT remove the slide. (AUDIT 17, owner)
- [x] T04 Package metadata. package.json name -> "rainbowfern-astro-v2", add "description". Keep version and deps. (AUDIT 8, owner)
- [x] T05 Astro site config. Add `site: 'https://rainbowfern.com'` to astro.config.mjs (confirm with owner in final report). (AUDIT 14)
- [x] T06 MetaSEO fixes. Make description required-with-fallback; fix resolvedImageURL concatenation (use new URL(image, Astro.site) when site set, else leave relative); point default image at src-independent /brand/rainbow-fern.svg; favicon href absolute "/brand/rainbow-fern.svg"; enable canonical using Astro.url. KEEP "poc-v2" in title. (AUDIT 15, 31)
- [x] T07 Page descriptions. Every page in src/pages passes a literal description prop to Layout. (AUDIT 15)
- [x] T08 robots.txt. Add public/robots.txt allowing all crawlers, with Sitemap line pointing to /sitemap.xml. (AUDIT 14)
- [x] T09 Footer. Show "© {year} Astrid Lapinski · Rainbowfern LLC" and add secondary links: Education, Experience, Projects (kept reachable), plus placeholders /pricing, /now, /cv, /press, /accessibility, /privacy, /writing (link only once page exists in later tasks). Add the line "No ads. No third-party trackers." (AUDIT 8, 30)
- [x] T10 CTA hover and radius. "Contact me" button hover: color change at 150ms token (not underline only). Card radius rounded-lg -> rounded-md in ProjectCard and ServicesHero cards. (AUDIT 22, 23)
- [x] T11 Type scale tokens. Add display/2xl/lg/label role variables to src/styles/theme.css matching typography.json; apply to page h1 (display), h2 (2xl), card titles (lg semibold), dates (mono label style with tabular-nums). Visual change must stay small. (AUDIT 20, 21)
- [x] T12 Tabular nums. Dates in Experience and Education and project meta use font-variant-numeric: tabular-nums. (AUDIT 21)

## Gradients and mock imagery (owner direction)

- [x] T13 Replace gradient fills in mock project SVGs with solid fills of the same palette: src/assets/projects/ember-notes-thumb.svg, fern-finder-header.svg, fern-finder-thumb.svg, moss-map-header.svg, trail-journal-thumb.svg. Keep shapes. Verify with grep -l "Gradient" src/assets/projects. (AUDIT 6)
- [-] T14 (SKIPPED: deletion of unreferenced template SVGs needs owner confirmation; reported at end) Remove unused gradient SVGs from src/assets: background.svg and astro.svg are unreferenced. Confirm with grep first, then delete. (AUDIT 6) — note: deletion is of unreferenced template assets; owner said "add pages, never delete" applies to pages only. If unsure, skip and report.

## Copy fixes

- [x] T15 Shadow caption and alt. In src/components/ServicesHero.astro, change "our resident dog" and "very very good boy" to first person singular ("my dog", "Shadow, my dog and a good boy."). Alt text: "Large dog sitting in a forest, looking at the camera. This is Shadow, my dog." (AUDIT 7)
- [x] T16 (checked: image loads fine after scroll, 320x427 rendered; no change needed) Lazy image check. In the mobile full-page screenshot the Shadow image left a gap. Check in browser by scrolling; if it did not load, set explicit width/height on Image and loading="eager" for that image. (AUDIT 12)

## Navigation and sitemap (judgment; owner-approved)

- [x] T17 Header nav to proposed sitemap: Home /, Work with me /work, Mentoring /mentoring, Case studies /cases, Writing /writing, About /about, Contact /contact. Remove Education/Experience/Projects from main nav only. Keep isCurrent logic. Mobile menu uses the same list. (AUDIT 3)
- [x] T18 Stub pages. Create placeholder pages (each one h1, a literal first paragraph, description, and a "[TBD]" note where Astrid's input is needed): /work/index.astro, /work/codebase-map.astro, /work/small-business.astro, /sessions.astro, /mentoring.astro, /cases.astro, /writing.astro, /about.astro, /pricing.astro, /now.astro, /cv.astro, /press.astro, /accessibility.astro, /privacy.astro. Use Layout. Use copy from .design-intelligence/foundations/content-strategy.md where it exists; otherwise placeholder. (AUDIT 3, 16)
- [ ] T19 Home rebuild (src/pages/index.astro): h1 "I help small teams understand the software and systems they already have, and make them safer to change." Literal paragraph from content-strategy draft copy. Portrait (src/assets/AstridLooktoFront.webp) beside short intro. Four "Ways to work with me" blocks (Codebase Map, Small-business systems, Mentoring and coaching, Unstuck sessions), each with one sentence and "From [PRICE TBD]" linking to /pricing. One proof teaser linking /cases. Three doors partial. Remove old featured projects grid from home (projects stay at /projects). (AUDIT 1, 2, 29)
- [ ] T20 Offer page template and two offer pages. Build shared component src/components/OfferPage.astro (problem, deliverables, how it works, proof, price line linking /pricing, who it's not for, three doors). Use for /work/codebase-map and /work/small-business. Copy from content-strategy offers table. (AUDIT 2)
- [ ] T21 /work index: list the four offers with links to /work/codebase-map, /work/small-business, /sessions, /mentoring. (AUDIT 3)
- [ ] T22 /sessions (Unstuck sessions) and /mentoring. Mentoring: privacy practices stated plainly, underrepresented-background list, sliding scale on honor system. Use content-strategy text. (AUDIT 2, 3)
- [ ] T23 /pricing. One canonical page: sliding scale with standard rate and floor placeholders; "solidarity rate" lowest tier; capacity line; fee allocation placeholder; every price "[PRICE TBD]". (AUDIT 2, 27)
- [x] T24 ThreeDoors component (src/components/ThreeDoors.astro): free 30-min intro call slot with "[SCHEDULER EMBED: Calendly or similar]", book paid Unstuck session link to /sessions, plain email contact@rainbowfern.com with "[TBD: response time]". Use on /contact and every offer page. (AUDIT 4, owner)
- [ ] T25 /contact rebuild. Replace placeholder with the ThreeDoors component, the four funding-preference options for the intro call (as radio list, non-required), and the email. No real scheduler; slot is clearly marked. (AUDIT 4)
- [ ] T26 /about. Story (existing intro copy from home, edited to first person), self-portrait, "How I work" section with four practice lines from voice.md (values as policies). Link to /cv. (AUDIT 1, 27, 29)
- [ ] T27 /cases. Placeholder lead-case section with PPP "[TBD: disclosure]" and a list of projects linking to /projects. (AUDIT 5)
- [ ] T28 /cv. Link to /education and /experience (kept accessible), "Open to Technical Product Owner and architect roles", PDF download placeholder "[TBD: résumé PDF]". Do not delete education or experience pages. (AUDIT 18, 19)
- [ ] T29 /writing, /now, /press, /accessibility, /privacy content. /now: dated availability line placeholder. /press: third-person bio draft. /privacy and /accessibility: no ads, no third-party trackers, basic analytics "[TBD: analytics tool]". (AUDIT 16)

## Legibility layer

- [ ] T30 JSON-LD in Layout head: Person (Astrid Lapinski, alumniOf Drexel University, knowsAbout list, sameAs placeholders for Substack/LinkedIn/GitHub) and ProfessionalService (Rainbowfern LLC, founder Astrid Lapinski, areaServed Remote and Philadelphia region). No offers until prices exist. (AUDIT 13)
- [ ] T31 /llms.txt in public/, linking /work, /pricing, /cases, /cv, /press. (AUDIT 14)
- [ ] T32 Static sitemap.xml in public/ listing the routes that exist after T18. Note in final report: switch to @astrojs/sitemap later (new dependency, needs approval). (AUDIT 14)
- [ ] T33 Canonical link on every page via MetaSEO using Astro.url (depends on T05). (AUDIT 14)

## Housekeeping

- [x] T34 Move OUTSTANDING-CONSIDERATIONS.md to repo root with git mv and update the link in .design-intelligence/system.md. (AUDIT 32)

## Deferred (not in this pass; report at end)

- Real project content and codeUrls (owner replacing).
- Prices, PPP disclosure, testimonials, analytics tool choice, RSS feed (needs posts), OG image asset.
- Education tile density (AUDIT 18), Experience copy rewrite (AUDIT 19): pages kept; rewrite waits on owner.
- Dark project hero scrim (AUDIT 24), code block theme (AUDIT 25), signature quirks (AUDIT 28), colophon and bread-and-roses line (AUDIT 27).
- Deferred from T10: rounded-lg remains on src/pages/education.astro:78 (skill cards) and src/pages/projects/[id].astro:32 (project hero). Hover on Contact me is opacity 90%, not a colour token (AUDIT 23 asked for colour).
