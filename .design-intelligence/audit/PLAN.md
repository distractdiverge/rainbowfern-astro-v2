# PLAN: rainbowfern-astro-v2 audit remediation

Source of approved plan: /Users/allielapinski/.claude/plans/i-have-drastically-updated-zany-sprout.md
Audit findings: .design-intelligence/audit/AUDIT.md

## Owner direction (overrides AUDIT where they conflict)

- Keep "v2" / "poc-v2" in page title metadata. Fix other metadata problems only.
- Add pages, never delete. Nav follows the proposed sitemap. /education, /experience, /projects and /projects/[id] stay reachable by direct URL; they leave the main nav and get footer links.
- Gradients: remove from mock project imagery only. Do not change project copy or codeUrls.
- package.json: correct name and description (currently "popover-poc").
- Mobile menu slide-out: keep motion; it must respect prefers-reduced-motion. Add the global reduced-motion rule.
- Contact page: placeholders for the three doors, with a clearly marked slot for a Calendly-style embed or link. No real scheduler.
- Dev server already runs on localhost:1234. Do NOT start another. Use playwright-cli against localhost:1234.
- Motion exception question and /cv merge question are settled: keep motion as-is; keep /education and /experience as they are.

## Process

Loop per task: Read AUDIT -> Read PLAN -> pick next unchecked task in TODO.md -> do it -> check/verify -> commit -> tick task -> next.
- One commit per task, on branch design-audit-2026-11.
- Commit message ends with the attribution line given by the system reminder.
- Subagents (Haiku, low effort) do the implementation. Each gets AUDIT.md, PLAN.md and its single task. Subagents do not commit; the orchestrator reviews the diff, verifies, and commits.
- Tasks run sequentially because most touch Layout.astro, Header.astro, global.css or the same page files.

## Verification (per task)

- Dev server at localhost:1234 (already running). Hot reload picks up edits.
- playwright-cli goto the affected routes at 1280 and 390; check for console errors and visual result.
- Grep checks listed in TODO.md for the task.
- Dark theme: set sessionStorage theme-override=dark, then check.

## Placeholders

- Prices: "[PRICE TBD]" only. Search for it at the end.
- Copy that needs Astrid's input: mark with "[TBD: ...]" and list in the final report.
- Scheduler: "[SCHEDULER EMBED: Calendly or similar]" slot.
- PPP / case disclosure: TBD. Projects are being replaced by the owner.
