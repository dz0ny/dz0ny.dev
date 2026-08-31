import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro:schema";

const posts = defineCollection({
	loader: glob({
		base: "./src/content/posts",
		pattern: "**/index.md",
		// Keep Hugo's URLs: the directory name is the slug, not "<dir>/index".
		generateId: ({ entry }) => entry.replace(/\/index\.md$/, ""),
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			description: z.string().optional(),
			date: z.coerce.date(),
			draft: z.boolean().default(false),
			featured: z.boolean().default(false),
			tags: z.array(z.string()).default([]),
			categories: z.array(z.string()).default([]),
			cover: image().optional(),
		}),
});

export const collections = { posts };
