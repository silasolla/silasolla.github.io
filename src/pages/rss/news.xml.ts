import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => {
    // 日本語版：lang が 'ja' または未定義，かつ 'news' タグを含む
    return data.tags.includes('news') && (data.lang === 'ja' || data.lang === undefined);
  });
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: '芳賀 雅樹 / Masaki Haga - お知らせ',
    description: 'お知らせ記事のRSSフィード',
    site: context.site?.toString() || 'https://silasol.la',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      pubDate: post.data.date,
      categories: post.data.tags,
    })),
    customData: `<language>ja</language>`,
  });
}
