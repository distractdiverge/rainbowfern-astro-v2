---
title: "PPP loans: from concept to live in two weeks"
description: "Integrating PayPal's small-business lending with the SBA's Paycheck Protection Program, with no documentation and a two-week deadline."
employer: PayPal (PayPal Credit)
role: Principal Technical Staff, Software Architecture
period: 2020
order: 1
draft: true
---

<!--
Source: "0602 Recording: Cybersecurity Integration & PPP Launch at PayPal" + résumé.
TO CONFIRM BEFORE PUBLISHING: disclosure is still TBD (OUTSTANDING-CONSIDERATIONS #3).
No loan volumes or dollar figures are included on purpose.
-->

## Context

In spring 2020, the pandemic shut down small businesses across the US. Congress created the Paycheck Protection Program (PPP), run through the Small Business Administration (SBA), and PayPal joined as a lender. Small businesses needed applications taken, checked and sent to the SBA fast, because the money ran out in rounds.

I was one of three architects on the PayPal Credit platform. I came from Swift Financial, the business-lending company PayPal had acquired, and I'd been the sixth developer there. I knew its systems because I'd helped design them.

## Constraint

- **Two weeks** from concept to a live system.
- **No documentation.** The SBA's integration had none worth the name.
- **A regulated financial company.** Every application had to match what the SBA had on record. A mismatch wasn't a bug report. It was a business that might not get paid.
- Leadership needed to see applications as they came in, not in a report a week later.

## What I did

- **Integrated with the SBA** by working out its behavior from the outside: what it accepted, what it rejected and what it sent back.
- **Instrumented it from day one**, so our VP could watch applications arrive in real time.
- **Designed the data reconciliation** as serverless AWS Lambda functions. They checked what we had received and submitted against what the SBA expected, so mismatches came to the surface early.
- **Worked side by side with the data engineering team** on back-end resolution of applications that didn't line up.
- **Turned the architecture into a presentation** afterwards. I gave it in India to an audience of more than 300 engineers, to help staff a new team that would maintain the Swift Financial systems.

**My part vs. the team's:** the SBA integration, its instrumentation and the reconciliation architecture were mine. Getting the whole program live in two weeks was a team effort across engineering, data and product.

## Outcome

- The program went from concept to live in two weeks.
- Applications were reconciled against SBA records, not trusted blindly.
- The presentation in India helped bring new engineers onto the team that took over those systems.

Volumes are confidential. This remains one of the pieces of work I'm proudest of.

## Why it matters to a client

The hard part wasn't only the code. It was the technical, social and legal system around it.

If you're facing a hard deadline, a partner system with no documentation, or numbers that have to reconcile with someone else's records, I've done that under more pressure than most projects carry. I map what's actually there, build in visibility from the start, and make sure the people who maintain it next can understand it.
