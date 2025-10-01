// @ts-ignore
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
    schema: z.object({
        date: z.date(),
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { posts };

