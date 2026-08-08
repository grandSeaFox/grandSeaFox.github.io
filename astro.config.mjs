import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The repo is a GitHub user site, so it is served from the domain root.
// Swap `site` if a custom domain is added later. RSS and sitemap read it.
export default defineConfig({
  site: 'https://grandseafox.github.io',
  // Astro 7 defaults this to 'jsx', which drops the newline between a text
  // node and an inline element. That eats the space in "Lisbon. I build",
  // in every project title followed by a chip, and in the footer separators.
  // The markup relies on source whitespace, so keep the pre-7 behaviour.
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
