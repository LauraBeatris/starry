import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: 'https://starry.vercel.app',
      lastModified: new Date().toISOString(),
    },
    // TODO - Dynamically add URLs for pictures generated, querying from
  ];
}
