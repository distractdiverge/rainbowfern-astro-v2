---
title: "Swift Financial into PayPal: integrating an acquisition"
description: "Helping a small business-lending company's systems and engineers fit into PayPal over a multi-year acquisition integration."
employer: PayPal (Business Financing Solutions)
role: Senior Engineer, then Architect
period: 2017–2019
order: 2
notes: |
  Source: "0604 Acquisition Integration: Swift Financial, Salesforce and Architectural Transition",
  "0704 Meeting: Cross-Team Communication, Integration and Knowledge Sharing" + résumé.
---

## Context

PayPal acquired Swift Financial, a business-lending company in Conshohocken, PA. I'd joined Swift as an engineer and was managing its backend web services team: the decision engine, credit pulls and shared .NET libraries.

Most of the business ran on Salesforce. It was the system of record for loans, and it also ran the call center, collections and underwriting. My team sat in the middle of all of it, with internal "customers" across the company.

## Constraint

- Swift had to **keep lending while it was being integrated**. Nothing could go dark.
- PayPal was **huge and consumer-focused**. Its architects and engineers knew consumer credit well and business credit hardly at all.
- The people were **spread out**: Swift in Pennsylvania, PayPal engineers in San Jose, Baltimore and Arizona.
- There was **no architect role** at Swift to own the "how does this fit into PayPal?" questions.

## What I did

- **Ran the architecture conversations.** I held whiteboard sessions, drew the diagrams and wrote the documents that kept every team on the same page. Questions like "where does our decision engine fit?" and "how does Salesforce plug into PayPal's ecosystem?" had a place to land.
- **Paired with two engineers from PayPal's San Jose office** to work through the architectural fit, system by system.
- **Moved knowledge in person.** I traveled to Baltimore, sometimes several times a month, and to Arizona, staying a few days at a time to work alongside engineers and bring them up to speed on Swift's systems.
- **Kept a standing habit of one-on-ones** with managers and, later, architects across PayPal (risk, collections tooling, the wider PayPal integration). I brought what I learned back to my team so we could see requests coming before they arrived.
- **Created the architect role.** I drafted the job description with my manager, got it approved, and became the architect for Business Financing Solutions.
- **Carried business-credit knowledge into PayPal Credit.** When I moved over as one of three architects on the PayPal Credit platform, I was the person who knew business lending.

**My part vs. the team's:** the cross-team architecture work, the knowledge transfer and the architect role were mine. Each team's managers ran the day-to-day engineering.

## Outcome

- Swift's engineers learned to work inside PayPal's framework and ecosystem while Swift kept lending.
- Teams in three locations worked from shared diagrams and documents instead of guesses.
- The architect role I wrote became a permanent part of the organization.

## Why it matters to a client

Most integration problems aren't about the API. They're about two groups of people who don't yet know what the other has built.

If you've merged with another organization, inherited a system, or have teams that have stopped talking to each other, I can map both sides, write it down in plain language, and get the people who need to agree into the same room.
