# Portfolio redesign — proposal for approval

Nothing has been changed yet. This is the plan. Once you approve (and fill the gaps in §9),
I'll implement on `claude/portfolio-redesign-strategy-wes7ek` in `grandSeaFox/grandSeaFox.github.io`.

---

## 1. Where the site is today

`grandSeaFox.github.io` is a single 20 KB `index.html` built on a bought template
(Bootstrap 3 + jQuery 3.2 + a handful of jQuery plugins). Four sections: Home, About,
Skills, Experience.

Concrete problems, worst first:

| Issue | Detail |
| --- | --- |
| **Lorem ipsum shipped live** | The Roofr entry (`index.html:344`) is placeholder Latin. It's public right now. |
| **Employment is two years stale** | Site says "Roofr — APRIL 2023 - PRESENT". Per your CV, Roofr ended April 2024 and you've been Senior Software Engineer at Park since September 2024. |
| **No projects at all** | Zero of your ~35 repos appear. The strongest work (a from-scratch GBA emulator) is invisible. |
| **Skills are stale** | Lists AngularJS, Laravel 8, Java 11, Amplitude. Missing: Rust, Swift, Go, Next.js 16, Postgres/Drizzle/Prisma, Docker-compose infra, LLM/Anthropic SDK work. |
| **Typos / hardcoded facts** | `"experience inJava 11"` (`:151`), hardcoded `Age 28` (`:158`) which silently rots each year. |
| **Broken asset paths** | Logo and images use `../images/...` from the site root (`:59`, `:100`, `:135`) — one level above the repo. They 404 on the deployed site. |
| **19 MB of Font Awesome** | The full `fontawesome-free-5.12.0-web` folder is committed for ~6 icons. Repo is ~24 MB, 80% of it unused icons. |
| **Unused screenshots** | `images/port/` has Climber, GesEquip and Melius screenshots that nothing references. |
| **No analytics, no blog, no privacy pages** | The three things you're asking for. |

Also: `grandSeaFox/planum` is an **empty repository** — no commits, no branches. Nothing to
work with there, so all of this lands in `grandSeaFox.github.io`. Tell me what planum is meant
to be if you want it involved.

---

## 2. Build approach — pick one

You're asking for a blog and a set of privacy-policy pages. That's a multi-page site with
repeated layout. Hand-maintaining that in copy-pasted HTML gets painful by the third post.

**Option A — Astro static site (recommended).**
Content collections for blog posts and privacy policies (write Markdown, get pages), one shared
layout, RSS feed, sitemap, automatic image optimization. Builds to static HTML — GitHub Pages
serves it exactly as it does today, deployed by a GitHub Action on push to the branch. No React
runtime shipped unless a specific island needs it. Zero jQuery, zero Bootstrap.

- Cost: a real rebuild. The current template's CSS doesn't survive; I'd write the styles fresh.
- Payoff: adding a blog post becomes "drop a `.md` file in `src/content/blog/`". Same for a new
  privacy policy or a new project card.

**Option B — modernise the single page in place.**
Keep vanilla HTML/CSS, drop jQuery and Bootstrap, hand-write the new sections, add
`/blog/index.html` + one folder per post, `/privacy/<app>/index.html` per app.

- Cost: every blog post is a hand-built HTML file; the shared header/footer is copy-pasted into
  each page and drifts.
- Payoff: smaller diff, no build step, no toolchain to maintain.

My recommendation is **A**. You already work in Next.js daily, so an Astro content pipeline will
feel familiar, and the blog is the piece that decays fastest without one.

---

## 3. Proposed site map

```
/                     Hero → About → Timeline → Featured projects → Open source → Latest posts → Contact
/projects             Full project grid (filter: Rust / TypeScript / Swift / Python / mobile)
/projects/<slug>      Case study per flagship project
/blog                 Post index (tag filter, RSS at /rss.xml)
/blog/<slug>          Post
/privacy              Index of all app policies
/privacy/<app>        One policy per shipped app
/uses  (optional)     Tools, editor, hardware — cheap, gets shared a lot
```

Nav: `Work · Projects · Blog · About · Contact`

---

## 4. Repositories to surface

You have ~35 repos and almost all of them are **private**. That drives one important decision:
**cards should link to a case-study page on your own site, not to GitHub.** A "View on GitHub"
button that 404s for every visitor is worse than no button. Only the genuinely public repos get
a GitHub link.

### Tier 1 — flagship, gets a full case-study page

**1. GGBA — `grandSeaFox/goncalo-gba`** ← lead with this one
A Game Boy Advance emulator written from scratch in Rust, plus a Jetpack Compose Android app.
No third-party emulator code, no BIOS image. ARM7TDMI (ARM + THUMB) validated against
`gba-tests`, all six PPU video modes with sprites/windows/blending, 4 PSG channels + 2
DirectSound FIFOs, 4 DMA channels, SRAM/Flash/EEPROM saves, HLE BIOS, save states. **270 tests,
zero clippy warnings.** Runs ~8× real time on desktop and holds a locked 60 fps on a Pixel 8 Pro
using ~1.3 of 8 cores. The `emu-core` crate deliberately knows nothing about the GBA so a second
console costs no UI work.

This is by a wide margin the strongest technical artifact you own — systems programming, a real
performance number, a shipped mobile app, and a deliberate architecture decision you can defend
in an interview. It should be the first thing on the page. It also needs a privacy policy for
the Play Store listing (§6).

**2. Sphala — `grandSeaFox/sphala`**
Turns raw PostHog (and GA4-via-BigQuery) A/B experiment data into stakeholder-ready prose with
an explicit ship / hold / kill recommendation, delivered to Slack on a schedule. Next.js 16,
Drizzle, Postgres, BullMQ workers, Clerk, Anthropic SDK, Resend, Recharts, Vitest — plus a
Docker Compose stack (Caddy + local TLS, Postgres 17 with pgvector, Redis with AOF) that mirrors
the intended OVH production topology. Product thinking + LLM work + infrastructure in one
project.

**3. Better Beta — `better-beta/better-beta`, `better-send`, `beta-list`** · founded Jun 2026
A bouldering app for iOS and Android, in internal beta. React Native (Expo) in TypeScript, with
a MapLibre map of areas and routes that keeps working offline at the crag, send logging with
grade confirmation, route photos, XP, leaderboards and achievements. Supabase and Cloudflare
behind it.

**Deliberately light on architecture.** The card names features and tools and stops there. How
auth, storage and permissions are actually wired is not something a portfolio needs to publish —
it is free reconnaissance for anyone probing a live product, and it reads as detail rather than
judgement. Save it for the interview, where it lands better anyway.

**You co-founded it, and that changes how it should be presented.** It isn't a personal project
in a list of personal projects — it's a company you helped start, with its own domain, its own
entity and its own privacy policy. So it appears twice on the site:

- In **Projects**, tagged *Co-founder*, linking out to betterbeta.io.
- In the **timeline as a role**, running concurrently with the Park job — which is exactly the
  kind of thing the merged timeline exists to show. "Co-founded and shipped a mobile product while
  holding down a senior engineering role" is a stronger claim than either fact alone.

Three reasons it sits above Sphala:

- It's a **product**, not a repo. The screenshots show real sends logged against real routes on
  the Portuguese coast.
- **Three services, not one app** — and now that I know what they are, it's worth saying on the
  card: the client (`better-beta`), a data-ingestion pipeline behind it (`better-send`), and the
  waiting-list site that feeds the beta (`beta-list`). Client, backend and go-to-market, built by
  two people in two months. That reads as a company; "a React Native app" doesn't.
- **It's your only mobile app besides GGBA's Android shell**, and it's the one non-engineer
  visitors can immediately understand. GGBA proves depth; Better Beta proves you ship things
  people use.

Say "in internal beta" on the card and mean it. It's more credible than implying a public launch,
and "founded two months ago, already in testing on both platforms" is the more impressive framing
anyway.

**Your CV doesn't mention it.** You co-founded a company and the document you send employers is
silent on it. That's a bigger omission than the missing Rust and Swift.

Note for the case study: the README says the map is "a stylized SVG… for production swap to
MapLibre/Mapbox", but the screenshot clearly shows MapLibre attribution. You've done the swap and
the README hasn't caught up. I've written the card against the screenshots, since that's the
current truth — flag it if I've read that wrong.

**4. ImoCerto**
You named it and I couldn't find it. It isn't in the repo list I can see, and a GitHub search
returns nothing. Possibilities: it's under an account this session can't reach (you have a
`gonelf` account too), it's named differently in git (`house_watcher` / `HOUSEWATCHER` look like
they could be the Portuguese property-scraping ancestor), or it's not on GitHub. **Tell me the
repo or paste a description and I'll write the card from that.**

**5. Growth Cockpit — `grandSeaFox/overseer`**
Internal Next.js 16 app that live-pulls ParkWithUs growth data (GA4 funnel via BigQuery,
Microsoft Clarity frustration signals, PostHog experiments), has an LLM rank each fresh snapshot
into a prioritized action queue, and tracks experiment results over time. Scheduled Inngest jobs
→ Supabase → pre-computed rows, so nothing heavy runs on page load.

This is the single most on-message project if you're positioning as a **growth** engineer, and
it pairs neatly with the PostHog instrumentation you're adding to this very site — that's a nice
line in the blog post announcing the redesign.

### Tier 2 — compact cards in the projects grid

- **`gonc-invest`** — Investment backtesting and screening. Next.js 16 + Recharts front end, Hono
  API, two FastAPI services (yfinance/pandas), Postgres 17, all in Docker. Implements Magic
  Formula, Piotroski F-score, dividend aristocrats, quality-value and momentum screens, plus a
  z-score composite and a walk-forward backtester reporting CAGR/Sharpe/Sortino/max drawdown/alpha.
  A daily scheduler runs a persistent $10k paper portfolio. Good polyglot signal (TS + Python).
  Its README is honest about the point-in-time bias in yfinance fundamentals — worth keeping that
  candour in the case study, it reads as maturity.
- **`arka`** — A portal for a law firm, client side and staff side, built on Next.js, Auth.js,
  Prisma and Postgres. Real client work with real access-control requirements — described at
  that level and no further, since the security posture belongs to the client, not to your
  portfolio.
- **`notchy`** — macOS app in Swift/SwiftUI (Xcode project, with a test target). Adds native-desktop
  breadth next to the Android and web work.
- **`camp-mobile`**, **`alora`**, **`home-helper`**, **`kabanza_frontend`/`_backend`** — optional
  extras. Tell me which of these you'd stand behind and I'll include them; I haven't read them.

### Tier 3 — "Open source" strip (these are actually public, so link straight to GitHub)

- `react_virtualized_timeline`
- `react-magic-dropdown-button`
- `performance_test_bun_hono-node_express` — a Bun+Hono vs Node+Express benchmark; that's blog-post
  bait, see §7
- `nextjs-14-onboarding`

### Deliberately excluded

`Park-LLC/park` (employer's code — belongs in the Experience timeline, not the project grid),
and everything archived: `total-dime`, `budget_stream`, `stock-streamer`, `pseudo-tasks`,
`valhala`, `make_money_online`, `house_watcher`, `product-shop-gh*`, `FE-Value-Trading-Portfolio`.

---

## 5. The timeline

One vertical timeline, newest first, with four entry types sharing a spine. Chips at the top
filter it: **All · Work · Education · Projects · Languages**.

The reason to merge them rather than run four separate lists: it shows *concurrency*. "Shipped a
Rust emulator while working full-time as a growth engineer" is a stronger statement than two
unrelated lists, and it's the same data.

### Work — from your CV, this is what goes live

| Role | Company | Dates | Location |
| --- | --- | --- | --- |
| Senior Software Engineer | **Park** | Sep 2024 – Present | Lisbon (hybrid) |
| Senior Growth Software Engineer | Roofr | Apr 2023 – Apr 2024 | Toronto (remote) |
| Fullstack Software Engineer | Nokia | Nov 2021 – Apr 2023 | Lisbon |
| Junior Software Engineer | Climber | Sep 2018 – Nov 2021 | Lisbon |
| Retail | Worten | Sep 2016 – Jan 2017 | — |

Two notes on this:

- **Worten is on your site but not on your CV.** You dropped it from the CV, which is the right
  call for a CV. On a personal site the "why a developer worked retail" paragraph is genuinely
  good writing and humanises the page. **Keep it or cut it — your call.** My preference is keep,
  collapsed by default at the bottom of the timeline.
- **There's a gap: Apr 2024 → Sep 2024.** A vertical timeline makes gaps visible in a way a CV
  doesn't. The good news is your repo history says that window was your most productive personal
  stretch — `react-magic-dropdown-button` (Apr), the Bun/Hono benchmark (May), `stock-streamer`
  and `nextjs-dashboard` (Jun), `budget_stream` (Jul), `nextjs-14-onboarding` and
  `go_supermarkets_scraper` (Aug), `kabanza` (Sep). I'd render that span as an explicit
  **"Independent projects"** entry listing what shipped. That turns a gap into a paragraph about
  output, which is much better than leaving the reader to guess.

The Roofr lorem ipsum gets replaced by your CV bullets (Amplitude instrumentation, growth
strategy, best-practice adoption). If you have any numbers you're allowed to quote — activation
lift, conversion, anything — that's the one thing that would sharpen it further.

The Park entry is the strongest on the CV and should carry the most weight on the page:
full-stack React/Rails/TypeScript ownership, modernising an aging codebase, driving the shift to
product-led with analytics and A/B testing, physical-device integration (thermal printers,
barcode scanners, Stripe terminals), championing an AI-first workflow, mentoring.

### Education & certification

| | |
| --- | --- |
| AP Degree in Computer Science (not completed) | UCN — University College Nordjylland, Aalborg, Denmark · 2017–2018 |
| Java OCP training | ~2021, towards the end of the Climber years. Training only — you sat the exam and scored 60 against a pass mark around 65, so there is no certification to claim. |

Phrasing matters on both. For UCN your CV says "(Canceled)"; on the site I'd write "AP Degree in
Computer Science — UCN Aalborg, 2017–2018 (did not complete)". Plain and unapologetic reads
better than a parenthetical that invites a question.

**For the OCP, my recommendation is to list the training and say nothing about the exam.** The
timeline reads "Java OCP training", labelled *Training*, never *Certification*. That is completely
true — you did the training — and it carries the signal you want, which is that you invested in
depth on the language you were writing every day.

Volunteering the 60/100 costs you and buys nothing. Nobody expects a portfolio to enumerate exams
not passed, so its absence isn't a lie by omission; but a reader who sees the score will remember
the number rather than the effort. The one hard rule is the one I've already applied: it must
never be phrased as a certification, because that's exactly the claim an interviewer verifies.

If you'd rather be maximally forthcoming, the honest phrasing is "sat the OCP exam, did not pass"
— say the word and I'll use it. I just don't think it serves you.

### Languages & tech — "first used" markers on the same spine

Reconstructed from your CV's per-role technology lists. Correct anything wrong:

- **2018** Java 1.8, Spring, Hibernate, AngularJS, PostgreSQL, SQL, JavaScript, HTML/CSS
- **2019** Angular 8, Node.js *(Melius)*
- **2021** TypeScript, React, Next.js, Redux, Java 11, Cassandra, Azure, Kubernetes/AKS, Docker
- **2023** PHP, Laravel, MongoDB, Segment, Amplitude, Sentry, WebSockets
- **2024** Ruby, Ruby on Rails, AWS/S3, Stripe, PostHog, BigQuery, Go, Bun/Hono, CircleCI
- **2025** Rust, Swift/SwiftUI, Dart/Flutter *(need the right year for Flutter)*
- **2026** Anthropic SDK / LLM tooling, Drizzle, Prisma, BullMQ, Inngest, Supabase, Clerk

**Worth flagging: your CV's Technical Skills section lists neither Rust nor Swift.** You wrote a
GBA emulator in Rust and a macOS app in Swift. Those are the two most differentiating things on
your entire list and they're absent from the document you send to employers. The site will
surface them properly — but you should add them to the CV too.

### Projects on the spine

Your CV already carries two the site is missing:

- **Melius** — Jun 2019 → Sep 2022, melius.pt. Autonomous web app notifying lawyers of case
  changes. Angular 8, Node.js, PostgreSQL, Heroku. **You already have three Melius screenshots
  sitting unused in `images/port/`** — they go straight into the case study. Nice adjacency:
  Melius (legal notifications, 2019) and `arka` (law-firm portal, 2026) make a "returned to the
  legal domain seven years later with a much bigger stack" story.
- **Stock-streamer** — Mar 2023 → , stock-streamer.com. Node/Express/MongoDB, Google Sheets API,
  Docker, GitHub Actions, Nginx, Portainer. **Is the site still up, and is this still active?**
  The repo is archived, and your CV says "under construction". If it's dead I'd cut it rather
  than link a broken domain.

The Tier 1/2 projects from §4 drop onto the same spine. Their dates below are inferred from
repository activity rather than the day you opened an editor, so correct any that are off:
`notchy` (Apr 2026), `sphala` and `arka` (May 2026), Better Beta (Jun 2026), Growth Cockpit and
`gonc-invest` (Jul 2026), **GGBA (Aug 2026)**.

Also unexplained: `images/port/` contains **GesEquip** screenshots (login, entry, equipment) that
nothing on the site references and that appear on neither your CV nor GitHub. What was it? If
it's yours and you like it, it's a free extra card with art already in the repo.

---

## 6. Privacy policy pages

Structure: `/privacy` as an index, `/privacy/<app>` per app, each generated from a Markdown file
so adding an app is one file.

**Scope: GGBA only, for now.** Google Play requires a reachable privacy policy URL for every
listing, so this is a hard blocker on shipping the emulator rather than a nice-to-have. The
section is built as a Markdown collection, so Notchy or anything else is one file whenever it's
distributed — no rework.

**Better Beta is excluded on purpose.** It's a separate company with its own domain and its own
policy at `betterbeta.io/privacy` (confirmed correct). Duplicating it here would be a liability
rather than a convenience: two copies drift, and only one of them is the operative document. The
portfolio links out to it instead.

Each page: what data is collected, what isn't, third-party processors (analytics, crash
reporting, auth provider), retention period, user rights under GDPR, contact address, and a
"last updated" date rendered from the file's front-matter so it can't silently go stale.

**I will not invent the contents.** A privacy policy that misdescribes what your app collects is
a legal problem, not a copy problem. For each app tell me: does it collect anything at all, does
it use crash reporting or analytics, does it have accounts, does it phone home. For GGBA
specifically I'd expect the honest answer is close to "nothing leaves the device", which makes
for a short, strong policy — but you confirm it, I won't assume.

---

## 7. Blog

`/blog` index with tag filtering, `/blog/<slug>` for posts, RSS at `/rss.xml`, per-post reading
time and OG images so links unfurl properly on LinkedIn.

Posts are Markdown files with front-matter (`title`, `date`, `tags`, `summary`, `draft`).
`draft: true` keeps a post out of the build so you can write in the open branch.

Launching an empty blog is the classic mistake — it reads as abandoned from day one. Three posts
you're already sitting on the material for:

1. **"Writing a Game Boy Advance emulator in Rust"** — why an interpreter and not a JIT, how you
   validated the CPU against `gba-tests`, how `emu-core` stayed console-agnostic. You have the
   numbers (8× real time, locked 60 fps on 1.3 cores) and numbers are what get shared.
2. **"Bun + Hono vs Node + Express"** — you already ran the benchmark and the repo is public.
   Publishing the methodology and results is a day's work at most.
3. **"Instrumenting a static portfolio with PostHog"** — meta, short, and it demonstrates the
   growth-engineering angle on the very page the reader is standing on.

I'd ship the redesign with at least one of these written. Happy to draft any of them from the
repos — you'd edit for voice and accuracy.

---

## 8. PostHog analytics

Loaded in the shared layout head, so it covers every page including blog and privacy pages.

- **Host: `https://eu.i.posthog.com`** (EU cloud). You're in Lisbon and the site will have EU
  visitors; EU-region data residency is the lower-friction choice.
- `defaults: '2025-05-24'`, `person_profiles: 'identified_only'` — no anonymous person profiles
  created for drive-by visitors, which keeps your event allowance for real signal.
- **Autocapture on**, plus explicit events worth naming: `project_card_click` (which project,
  which position in the grid), `case_study_scroll_depth`, `blog_post_read` (fires past 50%),
  `outbound_click` (GitHub / LinkedIn / email), `resume_download` if you add a CV button.
  Those are the events that answer "which project is actually pulling attention".
- **Consent.** GDPR applies to you. Two honest options: (a) run cookieless with
  `persistence: 'memory'` — no consent banner needed, but every visit counts as new, so you lose
  returning-visitor data; or (b) a small consent banner that initialises PostHog only on accept.
  For a personal portfolio I'd take (a): you want page-view trends and click signal, not
  cross-session identity. Your call.
- **What I need:** your PostHog **project API key** (the public `phc_...` one — it's designed to
  ship in client-side code, so committing it is fine) and confirmation of EU vs US cloud.
- **One limitation, stated up front:** the usual fix for ad-blockers is a reverse proxy on your
  own domain. GitHub Pages is static hosting with no proxy layer, so that isn't available here.
  Expect roughly 10–30% of traffic to be blocked — fine for trend-watching, not a source of truth
  for absolute counts. If that matters later, the fix is a custom domain fronted by Cloudflare.

---

## 9. What I need from you before implementing

Your CV resolved the employment timeline, education, Melius and Stock-streamer. What's left:

**Blocking:**

1. **Option A (Astro) or Option B (in-place HTML)?**
2. **Better Beta screenshots** — the two you sent arrived as inline images rather than files I can
   read off disk. Commit them to `images/projects/` and the card gets artwork. *(Everything else
   about Better Beta is now settled: founded Jun 2026, iOS + Android in internal beta, three repos,
   privacy policy stays on its own domain.)*
3. ~~**ImoCerto**~~ — settled. A Portuguese property portal, 20k+ listings, currently paused.
4. ~~**Java OCP**~~ — settled. Training only, ~2021, never described as a certification.
5. **Privacy — GGBA only.** Does the emulator collect anything at all, use analytics or crash
   reporting, phone home? I expect "nothing leaves the device", but you confirm it.
6. **PostHog** — project API key, EU or US, cookieless or consent banner.

**Non-blocking (I'll use placeholders and you correct them):**

7. Keep or cut the Worten entry?
8. Is stock-streamer.com still live? (Repo is archived.)
9. What was **GesEquip**? Screenshots are already in `images/port/`.
10. Which Tier 2 extras to include (`camp-mobile`, `alora`, `home-helper`, `kabanza`).
11. **Contact email — three different addresses are in play.** Your CV says
    `goncalo.raposeiro@outlook.com`, the live site says `bgraposeiro@gmail.com`, and this account
    is `sh4gpt@gmail.com`. I'll use the CV address unless you say otherwise, since that's the one
    you're actively handing to employers.
12. Any numbers you can quote for the Roofr or Park bullets.
13. Custom domain, or stay on `grandseafox.github.io`?
14. Do you want me to draft the launch blog post?

---

## 10. Rollout

| Phase | Contents |
| --- | --- |
| 1 | Scaffold (Astro or clean HTML), design system, GitHub Actions deploy, PostHog wired, delete the 19 MB Font Awesome dump |
| 2 | Hero, About, unified Timeline with corrected employment |
| 3 | Projects grid + case studies for GGBA, Sphala, Overseer, Better Beta, ImoCerto |
| 4 | Blog pipeline + RSS + first post |
| 5 | `/privacy` index + per-app policies |
| 6 | Lighthouse/a11y pass, OG images, meta tags, sitemap |

Each phase is a commit on `claude/portfolio-redesign-strategy-wes7ek`. Nothing reaches `master`
until you say so, so the live site stays as it is throughout.
