
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { navLinks, type NavLink } from '../../data/navLinks';

interface SearchItem {
  title: string;
  url: string;
}

// Fungsi rekursif untuk meratakan struktur navLinks yang bersarang
function flattenNavLinks(links: NavLink[]): SearchItem[] {
  let items: SearchItem[] = [];
  for (const link of links) {
    if (link.href && link.text) {
      items.push({ title: link.text, url: link.href });
    }
    if (link.children) {
      items = items.concat(flattenNavLinks(link.children));
    }
  }
  return items;
}

export const GET: APIRoute = async ({ params, request }) => {
  // 1. Ambil dan ratakan data dari navLinks
  const pageLinks = flattenNavLinks(navLinks);

  // 2. Ambil data dari koleksi berita
  const posts = await getCollection('berita');
  const postLinks: SearchItem[] = posts.map(post => ({
    title: post.data.title,
    url: `/berita/${post.slug}`
  }));

  // 3. Gabungkan semua data menjadi satu array
  const allSearchableItems = [...pageLinks, ...postLinks];

  // 4. Hapus duplikat atau item yang tidak valid jika ada
  const uniqueItems = allSearchableItems.filter(
    (item, index, self) =>
      item.url && item.title && index === self.findIndex((t) => t.url === item.url)
  );

  return new Response(JSON.stringify(uniqueItems), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
