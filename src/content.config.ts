import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Three collections, one file per entry. Adding a project, a post or a policy
 * means dropping a Markdown file in the right folder. No page to wire up.
 */

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    // Set when the work carries a role worth stating (e.g. "Co-founder").
    role: z.string().optional(),
    start: z.string(),
    end: z.string().optional(),
    // Shown as a chip: "Internal beta", "In production", "Archived".
    status: z.string().optional(),
    summary: z.string(),
    stack: z.array(z.string()),
    // Public URLs only. Private repos get a case study, never a dead GitHub link.
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    // Path relative to the entry, resolved to an optimized asset at build time.
    // Entries without one render with no media column.
    cover: image().optional(),
    coverAlt: z.string().optional(),
    // Caption under the image. Required reading when figures are illustrative
    // rather than real, so a rebuilt screenshot is never mistaken for evidence.
    coverNote: z.string().optional(),
    // id of another project this one grew out of.
    parent: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const privacy = defineCollection({
  loader: glob({ base: './src/content/privacy', pattern: '**/*.md' }),
  schema: z.object({
    app: z.string(),
    platforms: z.array(z.string()).default([]),
    // Absent for policies hosted elsewhere: their date is not mine to state.
    updated: z.date().optional(),
    summary: z.string(),
    // Set when the policy lives on another domain. The entry then links out
    // and no page is generated for it here.
    external: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog, privacy };
