import { put } from "@vercel/blob";
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // TODO - Validate search params with Zod
  const searchParams = new URL(req.url).searchParams;
  const id = searchParams.get("id") as string;

  if (process.env.REPLICATE_WEBHOOK_SECRET) {
    const secret = searchParams.get("secret") as string;

    if (secret !== process.env.REPLICATE_WEBHOOK_SECRET) {
      return new Response("Invalid secret", { status: 401 });
    }
  }

  // TODO - Parse with Zod and get output from Replicate
  const { output } = await req.json();

  if (!output) {
    return new Response("Missing output", { status: 400 });
  }

  const file = await fetch(output[0]).then((res) => res.blob());

  const { url } = await put(`${id}.png`, file, { access: "public" });

  await kv.hset(id, { image: url });

  return NextResponse.json({ ok: true });
}
