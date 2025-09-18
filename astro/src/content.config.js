import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/blog-posts" }),
	schema: z.object({
		title: z.string(),
		date: z.union([z.string(), z.date()]),
		description: z.string(),
	}),
});


const birds = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/birds" }),
	schema: z.object({
		title: z.string(),
		date: z.union([z.string(), z.date()]),
		description: z.string(),
		primaryTag: z.string(),
		tags: z.array(z.string())
	}),
});


const pages = defineCollection({
	loader: glob({ pattern: "*.md", base: "./src/data/pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { posts, birds, pages };
