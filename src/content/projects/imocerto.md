---
title: ImoCerto
start: "2025"
status: Paused
summary: >-
  A property portal for the Portuguese market, in the mould of Idealista.
  Auction, sale and rental listings with location search, a clustered map of the
  whole country, saved favourites, alerts by email, and a back office for
  managing what gets published.
stack: [Next.js, Hono, TypeScript, Drizzle, PostgreSQL, Socket.IO, AWS S3, Cheerio]
featured: true
order: 4
---

Over 20,000 properties published. Listings are ingested on a schedule from
public auction sources, enriched, and indexed for search — the interesting
problem was never the front end, it was keeping twenty thousand records fresh
and findable.

<!-- TODO: case study. Worth covering — the ingestion schedule, how listings
     were deduplicated across sources, and what search over 20k rows needed. -->
