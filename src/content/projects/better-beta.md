---
title: Better Beta
role: Co-founder
start: "2026-06"
status: Internal beta
summary: >-
  A bouldering and sport-climbing app for iOS and Android. Offline-first by
  design: an on-device SQLite cache backed by Supabase Postgres with row-level
  security, and a sync layer between them, so the map still works with no signal
  at the crag. Photos upload through a Cloudflare Worker that mints presigned
  PUTs straight to the bucket and come back resized through the CDN.
stack: [React Native, Expo SDK 51, TypeScript, SQLite, Supabase, MapLibre, Cloudflare Workers]
link: https://betterbeta.io
featured: true
order: 1
---

Three services, not one app: the client, a data-ingestion pipeline behind it,
and the waiting-list site that feeds the beta.

<!-- TODO: case study. Worth covering — why offline-first was non-negotiable for
     an app used at a crag, and how the sync layer resolves conflicts. -->
