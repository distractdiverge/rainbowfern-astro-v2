import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        description: z.string(),
        codeUrl: z.url(),
        assets: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
        headerImage: image().optional(),
        thumbnail: image().optional(),
        pinned: z.boolean().default(false),
        // Entered manually for now; field names mirror GitHub's created_at / pushed_at
        // so these can later be filled from the GitHub API.
        startedDate: z.coerce.date(),
        lastUpdated: z.coerce.date().optional(),
      })
      .refine((d) => !d.lastUpdated || d.lastUpdated >= d.startedDate, {
        message: 'lastUpdated must be on or after startedDate',
        path: ['lastUpdated'],
      }),
});

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    employer: z.string(),
    role: z.string(),
    // Free text on purpose (e.g. "2015–2017"); not sorted by date.
    period: z.string(),
    // Editorial display order, not chronology. Lowest comes first.
    order: z.number().int(),
    // Hidden from production builds (index, detail pages, sitemap) while true.
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, cases };
