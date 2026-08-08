import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The repo is a GitHub user site, so it is served from the domain root.
// Swap `site` if a custom domain is added later — RSS and sitemap read it.
export default defineConfig({
  site: 'https://grandseafox.github.io',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
