export const REPLICATE_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? 'https://starry.vercel.app/api/webhook'
    : process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview'
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/webhook`
      : `${process.env.NGROK_URL}/api/webhook`;
