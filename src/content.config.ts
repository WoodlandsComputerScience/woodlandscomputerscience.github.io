import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
    schema: ({image}) => z.object({
    date: z.date(),
    title: z.string(),
        description: z.string(),
        image: image().optional(),
    }),
});

export const collections = { posts };

