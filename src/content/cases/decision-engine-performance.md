---
title: "A loan decision engine: from 5 minutes to 30 seconds"
description: "Tracing and fixing a slow credit-decision service that customers and underwriters waited on every day."
employer: Swift Financial (Swift Capital)
role: Lead Software Engineer
period: 2015–2017
order: 3
---

<!--
Source: "0818 Project Summary: API Performance Optimization",
"0715 Case Study: Architectural Conflict Resolution..." (case 1) + résumé.
-->

## Context

Swift Financial made loans to small businesses. Every application went through a decision engine that graded the business and decided what it could be offered.

The engine had two kinds of users. Applicants waited on it the first time they applied on the website. Sales and underwriting agents waited on it every time they re-scored an application with new information.

A single decision took about **five minutes**.

## Constraint

- **Nobody fully understood the code.** The services were built on WCF, with a tangle of contracts, packages and calls back and forth between servers.
- **The slowness was partly accepted.** Some people felt a long wait made the decision look thorough.
- **It couldn't break.** It was the core of the lending business.
- **The team disagreed about direction.** A long-standing lead engineer had a different architectural vision, and others tended to defer to him.

## What I did

- **Started from the users,** not the code: who calls the engine, why, and what they expect back.
- **Drew the system** at a high level, then traced the calls between services until I found the critical path.
- **Measured it.** I ran load tests (JMeter) to see how response times were distributed, then used .NET tracing tools to see which functions ran, how often, and what they depended on.
- **Listed candidates for optimization**, and put tests around the real use cases before changing anything.
- **Settled the disagreement with evidence.** Instead of arguing architecture in the abstract, we tied both proposals to what the product needed to ship. Then we ran a small trial service. It showed what moving off WCF to Web API (with Swagger) would do.
- **Grew the team as the work grew.** I found the optimization candidates myself. As I took on engineers, I had them explore the quick wins. When the simple fixes ran out, we diagrammed the deeper changes and agreed on them with internal users and product before building.

**My part vs. the team's:** the investigation, the diagnosis and the plan were mine. The team I managed (6 developers and 1 QA) carried out most of the later changes.

## Outcome

- Decision time went from **about 5 minutes to about 30 seconds**, roughly a 90% reduction.
- The migration to Web API made the services easier to integrate with, not only faster.
- The disagreement was settled by a result everyone could see. The working relationship with that engineer never became close, and I'm honest about that. The team still moved forward.

## Why it matters to a client

"It's slow and nobody knows why" is a common, fixable problem, and it's usually a mapping problem first.

If you have code you're afraid to change, this is the method I'd bring: understand who depends on it, draw it, measure it, put tests around it, then change the smallest thing that works. That's the core of my Codebase Map offer.
