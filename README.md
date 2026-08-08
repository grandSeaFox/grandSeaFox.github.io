# grandseafox.github.io

My portfolio. Astro, static output, deployed to GitHub Pages by Actions.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
```

## Where things are

```
src/content/projects/   one Markdown file per project
src/content/blog/       one file per post, draft: true keeps it unpublished
src/content/privacy/    one file per app, or an external URL for policies hosted elsewhere
src/data/timeline.ts    the timeline
src/pages/              routes
src/styles/global.css   every design token
src/assets/projects/    web-sized cover images
images/projects/        full-size source screenshots, not served
```

Adding a project, a post or a policy means adding a file. The routes, the
listings, the RSS feed and the sitemap all follow from it. The schemas in
`src/content.config.ts` are checked at build time, so a bad date or a missing
field fails the build instead of shipping.

## Analytics

PostHog loads only when `PUBLIC_POSTHOG_KEY` is set, so local builds send
nothing. Set it as a repository variable for production. See `.env.example`.

## Deploying

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and
publishes to Pages. This needs Settings, Pages, Source set to GitHub Actions.
