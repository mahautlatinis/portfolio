export default async function sitemap() {

  let routes = ['', '/uses', '/work'].map((route) => ({
    url: `https://mahautlatinis.io${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
