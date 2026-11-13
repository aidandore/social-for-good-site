import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each collection is a folder of Markdown files that Andrew edits via Pages CMS (.pages.yml).

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    organisation: z.string(),
    // "client" = shown on Home/About, "training" = shown on Training page
    photo: z.string().optional(),
    kind: z.enum(['client', 'training']).default('client'),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    tag: z.string(),
    summary: z.string(),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string().default('') })).default([]),
    quote: z.string().optional(),
    quoteBy: z.string().optional(),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.string(),
    summary: z.string(),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const clients = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clients' }),
  schema: z.object({
    name: z.string(),
    url: z.string().optional(),
    logo: z.string().optional(),
    // Display height in px; squarer logos need more than the default 40.
    logoHeight: z.number().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { testimonials, work, posts, clients };
