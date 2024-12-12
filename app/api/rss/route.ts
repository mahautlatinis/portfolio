import { NextResponse } from 'next/server';

interface FeedItem {
  title: string;
  slug: string;
  description: string;
  date: string;
}

// Exemple de récupération de données (à remplacer par vos fonctions réelles)
async function fetchFeedItems(): Promise<FeedItem[]> {
  return [
    {
      title: 'Comment utiliser Storybook avec Shadcn',
      slug: 'articles/storybook-shadcn',
      description: 'Un guide étape par étape sur l\'intégration de Storybook avec Shadcn.',
      date: '2024-12-10T08:00:00Z',
    },
  ];
}

export async function GET() {
  const items = await fetchFeedItems();

  const feed = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Portfolio de Mahaut Latinis</title>
        <link>https://mahautlatinis.fr</link>
        <description>Les derniers articles et projets de Mahaut.</description>
        <language>fr</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${items
          .map(
            (item) => `
          <item>
            <title>${item.title}</title>
            <link>https://mahautlatinis.fr/${item.slug}</link>
            <description>${item.description}</description>
            <pubDate>${new Date(item.date).toUTCString()}</pubDate>
          </item>
        `
          )
          .join('')}
      </channel>
    </rss>
  `;

  return new NextResponse(feed, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
