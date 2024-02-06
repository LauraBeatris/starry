import * as Sentry from '@sentry/node';
import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import * as z from 'zod';

const WebhookParamsSchema = z.object({
  /**
   * ID of the stored blob, initially created at the server action
   */
  id: z.string(),
  /**
   * Secret params sent in the webhook request to valid if the request was
   * made from within the server action
   */
  secret: z.string(),
});

const WebhookPayloadSchema = z
  .object({
    output: z.array(z.string()),
  })
  .partial();

export async function POST(req: Request) {
  const parsedSearchParams = WebhookParamsSchema.safeParse(
    Object.fromEntries(new URL(req.url).searchParams),
  );

  if (!parsedSearchParams.success) {
    const errorMessage = 'Invalid request params';

    Sentry.captureException(errorMessage, {
      extra: {
        validationError: parsedSearchParams.error,
      },
    });

    return new NextResponse(errorMessage, { status: 400 });
  }

  const { id, secret } = parsedSearchParams.data;

  if (secret !== process.env.REPLICATE_WEBHOOK_SECRET) {
    const errorMessage = 'Invalid secret';

    Sentry.captureException(errorMessage, {
      extra: {
        secret,
      },
    });

    return new NextResponse(errorMessage, { status: 401 });
  }

  const payload = await req.json();
  const parsedWebhookPayload = WebhookPayloadSchema.safeParse(payload);

  if (!parsedWebhookPayload.success) {
    const errorMessage = 'Invalid payload';

    Sentry.captureException(errorMessage, {
      extra: {
        payload,
      },
    });

    return new NextResponse(errorMessage, { status: 400 });
  }

  const { output } = parsedWebhookPayload.data;
  if (!output) {
    const errorMessage = 'Missing Replicate output within response';

    Sentry.captureException(errorMessage, {
      extra: {
        payload,
      },
    });

    return new NextResponse(errorMessage, { status: 400 });
  }

  const file = await fetch(output[0]).then((res) => res.blob());

  const { url } = await put(`${id}.png`, file, { access: 'public' });

  await kv.hset(id, { generatedImageUrl: url });

  return NextResponse.json({ ok: true });
}
