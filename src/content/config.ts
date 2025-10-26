import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    tags: z.array(z.enum(['news', 'tech', 'diary'])),
    coverImage: z.string().optional(),
    pinned: z.boolean().optional(), // ピン留め
    important: z.boolean().optional(), // 重要なお知らせ
    lang: z.enum(['ja', 'en']).optional(), // 言語 (未定義の場合は両言語版に表示)
  }),
});

export const collections = {
  posts: postsCollection,
};
