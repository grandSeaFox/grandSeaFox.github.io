import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return rss({
    title: 'Gonçalo Raposeiro',
    description: 'Notes on emulation, growth engineering, and things that turned out harder than expected.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.summary,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`,
      })),
  });
}
