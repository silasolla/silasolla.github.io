import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { getTranslation } from '../../i18n/translations';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => {
    // 日本語版：lang が 'ja' または未定義，かつ 'diary' タグを含む
    return data.tags.includes('diary') && (data.lang === 'ja' || data.lang === undefined);
  });
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: getTranslation('ja', 'rss.feed-title-diary'),
    description: '日記のRSSフィード',
    site: context.site?.toString() || import.meta.env.SITE_URL || 'http://localhost:4321',
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
