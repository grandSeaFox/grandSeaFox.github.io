---
title: Sphala
start: "2026-05"
summary: >-
  Reads experiment data out of PostHog and GA4 and writes up what happened,
  ending with ship, hold or kill. It posts the summary to Slack on a schedule so
  nobody has to go looking for it.
stack: [Next.js, Drizzle, BullMQ, Anthropic SDK, Clerk, Postgres]
order: 6
---
