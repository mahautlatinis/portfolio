'use client';

import { useEffect, useState } from 'react';

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string[];
}

export default function MediumArticles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/medium-rss');
        if (!res.ok) {
          throw new Error('Erreur" lors de la récupération des articles.');
        }
        const data = await res.json();
        //console.log("data : ", data);
        setArticles(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchArticles();
  }, []);

  if (error) {
    return <div>Erreur : {error}</div>;
  }

  return (
    <div>
      <h2>Articles Medium</h2>
      <ul>
        {articles.map((article, index) => (
            <li key={index} className="p-2">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
              </a>
              <p>{new Date(article.pubDate).toLocaleDateString()}</p>
              {article.category.map((cat, element) => (
                <ul key={element}>
                  <p>{cat}</p>
                </ul>
              ))}
              {/* <p dangerouslySetInnerHTML={{ __html: article.description }} /> */}
            </li>
        ))}
      </ul>
    </div>
  );
}
