'use client';

import { useEffect, useState } from 'react';
import {Chip} from "@nextui-org/react";

interface Article {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  category: string[];
}

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('/api/medium-rss');
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des articles.');
        }
        const data = await res.json();
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

  /* 
  TODO: à corriger
  */

  return (
    <div className="p-10">
      <h2>Articles</h2>
      <ul className="flex flex-row overflow-x-auto lg:mx-auto text-center">
        {articles.map((article, index) => (
            <li key={index} className="flex-shrink-0 w-80 h-auto m-10">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                <h3>{article.title}</h3>
              </a>
              {/* TODO: ajouter images, améliorer style */}
              {article.category.map((cat, index) => (
                <Chip color="danger" key={cat.concat(index.toString())} classNames={{
                  base: "border-small m-1",
                  content: "drop-shadow shadow-black text-black text-xs",
                }} variant="bordered">
                  {cat.toUpperCase()}
                </Chip>
              ))}
            </li>
        ))}
      </ul>
    </div>
  );
}
