import { NextResponse } from 'next/server';
import { parseStringPromise } from 'xml2js';

function extractPlainText(input: string, maxLength: number = 50): string {
  // Retirer toutes les balises HTML
  const plainText = input.replace(/<\/?[^>]+(>|$)/g, "");

  // Garder les premiers `maxLength` caractères
  return plainText.substring(0, maxLength);
}

export async function GET() {
  const mediumRSS = 'https://medium.com/feed/@mahautlatinis'; // Remplacez par votre nom d'utilisateur Medium

  const lastPublication = 'https://medium.com/feed/la-nouvelle-version-de-css-en-2024-une-révolution-a910ff5f3161'

  try {
    // Récupérer le flux RSS
    const response = await fetch(mediumRSS, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const xmlData = await response.text();

    // Convertir le flux RSS en JSON
    const rssJson = await parseStringPromise(xmlData);
    //console.log('Structure du RSS JSON :', JSON.stringify(rssJson, null, 2));

 
    // Extraire les articles
    const items = rssJson.rss.channel[0].item.map((item: any) => ({
      title: item.title[0],
      link: item.link[0],
      description: item["content:encoded"] ? extractPlainText(item["content:encoded"][0]) : "Description indisponible",
      pubDate: item.pubDate[0],
      category: item.category
    }));

    return NextResponse.json(items);
  } catch (error) {
    console.error('Erreur lors de la récupération du flux RSS Medium :', error);
    return NextResponse.json({ error: 'Impossible de récupérer le flux RSS.' }, { status: 500 });
  }
}
