import { kv } from "@vercel/kv";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids: string[] = [];
  let cursor = 0;
  const maxKeys = 50000;
  
  while (ids.length < maxKeys) {
    const [nextCursor, keys] = await kv.scan(cursor, {
      match: "*",
      count: 1000,
    });
    if (!keys.length || nextCursor === 0) break; 
    
    ids.push(...keys.slice(0, maxKeys - ids.length)); 
    cursor = nextCursor;
  }


  return [
    {
      url: "https://my-starry.com",
      lastModified: new Date().toISOString(),
    },
    ...ids.map((id) => ({
      url: `https://my-starry.com/generate-image/result/${id}`,
      lastModified: new Date().toISOString(),
    })),
  ];
}
