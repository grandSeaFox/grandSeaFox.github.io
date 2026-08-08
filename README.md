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
images/favicon-source.png  the 1024px original the favicons are cut from
public/                 favicons and anything else served at the root as-is
```

The favicons are generated, not hand-made. To change the icon, replace
`images/favicon-source.png` and re-cut them:

```bash
node -e "const s=require('sharp');const f='images/favicon-source.png';
[32,64].forEach(n=>s(f).resize(n,n).png().toFile('public/favicon-'+n+'.png'));
s(f).resize(180,180).flatten({background:'#fff'}).png().toFile('public/apple-touch-icon.png')"
```

The Apple one is flattened onto white because iOS composites home-screen icons
on black, which would swallow a dark outline.
