---
title: ImoCerto
start: "2025"
status: Paused
summary: >-
  A property site for Portugal, along the lines of Idealista. You can search
  auctions, sales and rentals by location, see them on a map, save the ones you
  like and get an email when something new matches. Staff manage listings from a
  back office.
stack: [Next.js, Hono, TypeScript, Drizzle, PostgreSQL, Socket.IO, AWS S3, Cheerio]
cover: ../../assets/projects/imocerto.webp
coverAlt: The ImoCerto auction search, with listing cards beside a clustered map of Portugal
featured: true
order: 4
---

It published over 20,000 properties. A scheduled job pulled listings from
public auction sites, tidied them up and indexed them. Keeping that many
listings current was most of the work.

<!-- TODO: case study. Worth covering — the ingestion schedule, how listings
     were deduplicated across sources, and what search over 20k rows needed. -->
