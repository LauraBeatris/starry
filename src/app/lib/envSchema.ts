import * as Sentry from '@sentry/node';
import z from 'zod';

const envVariableSchema = z.string().trim().min(1);
const envServerSchema = z.object({
  WORKOS_API_KEY: envVariableSchema,
  WORKOS_CLIENT_ID: envVariableSchema,
  WORKOS_REDIRECT_URI: envVariableSchema,
  JWT_SECRET_KEY: envVariableSchema,
  REPLICATE_API_TOKEN: envVariableSchema,
  REPLICATE_WEBHOOK_SECRET: envVariableSchema,
  KV_REST_API_READ_ONLY_TOKEN: envVariableSchema,
  KV_REST_API_TOKEN: envVariableSchema,
  KV_REST_API_URL: envVariableSchema,
  KV_URL: envVariableSchema,
  BLOB_READ_WRITE_TOKEN: envVariableSchema,
  NEXT_PUBLIC_SENTRY_DSN: envVariableSchema,
});

type EnvServerSchema = z.infer<typeof envServerSchema>;

const envServerParsed = envServerSchema.safeParse({
  WORKOS_API_KEY: process.env.WORKOS_API_KEY,
  WORKOS_CLIENT_ID: process.env.WORKOS_CLIENT_ID,
  WORKOS_REDIRECT_URI: process.env.WORKOS_REDIRECT_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  REPLICATE_WEBHOOK_SECRET: process.env.REPLICATE_WEBHOOK_SECRET,
  KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN,
  KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
  KV_REST_API_URL: process.env.KV_REST_API_URL,
  KV_URL: process.env.KV_URL,
  BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
  NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
} satisfies EnvServerSchema);

if (!envServerParsed.success) {
  const errorMessage = 'Error when parsing environment variables';

  Sentry.captureException(errorMessage, {
    extra: {
      issues: envServerParsed.error.issues,
    },
  });

  throw new Error(errorMessage);
}

export const envServerData = envServerParsed.data;

type EnvServerSchemaType = z.infer<typeof envServerSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvServerSchemaType {}
  }
}
