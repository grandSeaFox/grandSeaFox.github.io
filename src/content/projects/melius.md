---
title: Melius
start: "2019-06"
end: "2022-09"
status: Retired
summary: >-
  Told lawyers when something changed on one of their cases. It watched the
  court records, worked out what had moved and sent the notification, and the
  whole thing ran on free hosting. Law firms paid for it. It stayed up for three
  years at melius.pt.
stack: [Angular 8, Node.js, PostgreSQL, Heroku]
cover: ../../assets/projects/melius.jpg
coverAlt: The Melius case list, showing pending court processes
order: 8
---

I wanted to find out whether a full pipeline could run for nothing: extraction,
transforms, storage, the analysis on top and a UI for lawyers to actually use.
It could. Node did the extraction and the transforms, Postgres held the data,
Angular served the front end, and the hosting bill stayed at zero for three
years while the product had paying customers.
