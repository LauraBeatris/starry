export const REPLICATE_WEBHOOK_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://my-starry.com/api/webhook'
    : `${process.env.NGROK_URL}/api/webhook`;
