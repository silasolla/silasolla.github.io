/**
 * Remark plugin to resolve image URLs with @@ prefix
 * Converts @@/path/to/image.jpg to appropriate URL based on IMAGE_BASE_URL
 */

import { visit } from 'unist-util-visit';

/**
 * 画像 URL を生成
 */
function resolveImageUrl(path) {
  const IMAGE_BASE_URL = process.env.IMAGE_BASE_URL || '';
  const cleanPath = path.replace(/^\/+/, '');

  if (IMAGE_BASE_URL) {
    return `${IMAGE_BASE_URL}/posts/${cleanPath}`;
  } else {
    return `/posts/images/${cleanPath}`;
  }
}

// Markdown 画像構文 ![](@@/...) と HTML img タグを処理
export function remarkImageUrl() {
  return (tree) => {
    // Markdown 画像構文 ![](@@/...) を処理
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('@@/')) {
        const path = node.url.slice(3); // Remove @@/
        node.url = resolveImageUrl(path);
      }
    });
  };
}
