import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.coerce.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const archive = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    archiveReason: z.string(),
  }),
});

const showcase = defineCollection({
  type: "content",
});

export const collections = { blog, showcase, archive };
