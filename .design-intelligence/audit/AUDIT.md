# AUDIT: rainbowfern-astro-v2 against .design-intelligence (2026-11-12)

Method: playwright-cli against localhost:1234, desktop 1280px and mobile 390px, light and dark. Routes viewed: /, /contact, /education, /experience, /projects, /projects/portfolio-website. Source read: src/, tokens/, foundations/, decisions/.

Headline: the visual layer (tokens, themes, type, focus, spacing) is mostly aligned. Content, information architecture, trust and legibility still follow the old recruiter-portfolio site.

## Already conforms (keep)

- Tokens in src/styles/theme.css match colors.json, shadows.json and the dark-theme rules. No #000, tinted neutrals, dark shadows are none.
- System font stack, 17px body, 1.6 line height, ~672px prose column.
- :focus-visible is a 2px accent outline in both themes.
- Dark theme is near-black with lavender accent. Theme toggle is role="switch", follows OS, session-only override.
- Header and Footer respect prefers-reduced-motion.
- One h1 per page, main landmark, nav aria-label, lang="en", decorative images alt="".
- No third-party scripts or trackers.
- No "Alex" in src/ or public/.
- No horizontal overflow at 390px.

## A. Critical: strategy and content

1. Home does not say what Astrid fixes or for whom. src/pages/index.astro h1 is "Rainbow Fern Consulting"; first paragraph is "Hi! I'm Astrid…"; story is "corp ladder from intern to architect". Required: one h1 stating the offer plus one literal paragraph (principles, content-strategy Home, legibility checklist). Name spelled "Rainbow Fern" here vs "Rainbowfern" elsewhere.
2. Offers wrong. src/components/ServicesHero.astro lists "Software Engineering Consulting", "Software Test Automation", "Engineering Mentoring". Standard: Codebase Map, Small-business systems, Mentoring and coaching, Unstuck sessions. Each needs one sentence and a price line "From [PRICE TBD]". No prices on site anywhere.
3. Nav does not match proposed sitemap. Current: About, Contact, Education, Experience, Projects. Target (content-strategy): Home /, Work with me /work, Mentoring /mentoring, Case studies /cases, Writing /writing, About /about, Contact /contact. Missing routes: /work, /work/codebase-map, /work/small-business, /sessions, /mentoring, /cases, /writing, /about, /pricing, /now, /cv, /press, /accessibility, /privacy. Footer secondary: /pricing, /now, /cv, /press, /accessibility, /privacy, RSS, /llms.txt, sitemap.xml.
4. Contact page is a placeholder ("Placeholder content for the Contact page."). Needs the three doors: (a) free 30-minute intro call via scheduler, with at most three optional questions and four funding options ("Needs to be free right now", "Sliding scale", "We have a real budget", "Not sure yet"); (b) book a paid Unstuck session; (c) plain email contact@rainbowfern.com with a stated response time. The three doors should also close every offer page. No email is published anywhere.
5. Projects: four of five codeUrls are https://github.com/example/... and the content is placeholder. Owner is replacing these with real projects; do not edit project copy or codeUrls. Statement Summarizer card has no image (flat grey block).
6. Gradients in mock project imagery. Principles: solid colors only, including placeholders, overlays, images. Gradient fills found in: src/assets/projects/ember-notes-thumb.svg, fern-finder-header.svg, fern-finder-thumb.svg, moss-map-header.svg, trail-journal-thumb.svg. Also unreferenced src/assets/background.svg and src/assets/astro.svg contain gradients (template leftovers, not rendered).
7. Shadow caption/alt use "our" and "very very good boy" (src/components/ServicesHero.astro). Voice rule: first person singular; company of one.
8. Name and brand copy: footer "© Rainbowfern" should name Astrid Lapinski / Rainbowfern LLC. MetaSEO title keeps "poc-v2" (OWNER: keep). package.json name is "popover-poc" (must fix).

## B. High: accessibility and legibility

9. No skip link. Add "Skip to main content" as first focusable element in src/layouts/Layout.astro; add id="main" to main.
10. Touch targets under 44px at 390px: logo link (28px tall), "View all projects →" (27px), dark-theme switch (32px), hamburger (40x40), "← All projects" on project pages (text-sm, no padding). Rule: every link, button, icon control at least 44x44.
11. Education tiles look like controls but are not interactive (see 18).
12. Shadow image appeared as a large empty gap in the mobile full-page screenshot. Possibly lazy loading; verify and fix if real.
13. No structured data. Add JSON-LD Person (name "Astrid Lapinski", no alternateName, alumniOf Drexel University, knowsAbout, sameAs) and ProfessionalService (Rainbowfern LLC, founder, areaServed remote plus Philadelphia region). Offers in JSON-LD only with prices once /pricing is filled.
14. Missing crawler/meta files: robots.txt (allow all, decided 2026-11-12), sitemap.xml, RSS feed, /llms.txt. Canonical link commented out as TODO. astro.config.mjs has no `site`.
15. MetaSEO bugs (src/components/MetaSEO.astro): resolvedImageURL = image + " " + Astro.site yields "./fern-colors.svg undefined"; default image ./fern-colors.svg does not exist (asset is fern-colors-web.svg); favicon href relative (./brand/rainbow-fern.svg) breaks on nested routes; description prop is not passed by any page so content is empty. Each page needs a literal description.
16. No /accessibility or /privacy pages. Must state: no ads, no third-party trackers, basic privacy-respecting analytics; name the tool once chosen (Outstanding #7, still open).

## C. Medium: design-system details

17. Motion: mobile menu slide uses 0.3s ease (outside motion.json token durations). OWNER: keep the slide motion; it must respect reduced motion. Add the global reduced-motion rule from motion.json to global.css.
18. Education page: about 45 skill tiles with "N years" counters and letter-initial placeholder circles. Conflicts with dense-text and visual-complexity rules. OWNER: keep the page reachable; not in scope to rewrite now.
19. Experience page: repeated bullets across entries, a to-do-list style entry ("Met with prospective clients…"), and leftover code comment "Sample data based on the image". Recommend client-facing rewrite. Not in scope for this pass unless noted.
20. Type roles not implemented as tokens. typography.json defines display (clamp 2rem to 2.644rem, tracking -0.02em, bold, line-height 1.1), 2xl (1.836rem), card-title (lg 1.275rem semibold), label (xs mono semibold uppercase tracking 0.06em). Pages use Tailwind text-3xl/text-2xl.
21. Mono label role unused. Dates should use font-variant-numeric: tabular-nums per typography.json.
22. Radius: cards use rounded-lg (8px); radii.json says cards md (6px).
23. "Contact me" button hover is underline only. Use a token color change at fast (150ms).
24. Dark-theme project hero: bg-scrim 60% over bright image looks muddy. Consider a solid title band. Deferred.
25. Code blocks use Shiki default colors, not tokens; check contrast in both themes. Deferred.
26. Astro dev toolbar overlaps screenshots. Dev-only; no action.

## D. Low: polish and values

27. Anti-capitalist signals absent (voice.md). Pick three or four, do not stack on one page, no labels in headings. Owner-decided subtle approach. Candidates: solidarity-rate line on /pricing, "Co-ops, worker-owned businesses, nonprofits and community groups come first", colophon, "bread and roses" footer line. "How I work" section on /about.
28. Signature quirks: add one or two SVG icon quirks with aria-hidden (never emoji). Deferred to owner choice.
29. Self-portrait (src/assets/AstridLooktoFront.webp, AstridLooktoSide.webp) unused on site. Portrait beside intro is the pattern.
30. Footer minimal. Add secondary links and "no ads, no trackers" line.
31. Page titles: home title reads "About | poc-v2 | ...". Owner keeps poc-v2; add descriptive page title segment.
32. Housekeeping: move .design-intelligence/OUTSTANDING-CONSIDERATIONS.md to repo root (git mv) and update the link in .design-intelligence/system.md, per the file's own instruction.
