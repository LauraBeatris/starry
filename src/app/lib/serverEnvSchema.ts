import z from 'zod';

const envVariableSchema = z.string().trim().min(1);
const envServerSchema = z.object({
  WORKOS_API_KEY: envVariableSchema,
  WORKOS_CLIENT_ID: envVariableSchema,
  WORKOS_REDIRECT_URI: envVariableSchema,
  JWT_SECRET_KEY: envVariableSchema,
  BYTESCALE_API_KEY: envVariableSchema,
  UPSTASH_REDIS_REST_URL: envVariableSchema,
  UPSTASH_REDIS_REST_TOKEN: envVariableSchema,
  REPLICATE_API_TOKEN: envVariableSchema,
});

type EnvServerSchema = z.infer<typeof envServerSchema>;

const envServerParsed = envServerSchema.safeParse({
  WORKOS_API_KEY: process.env.WORKOS_API_KEY,
  WORKOS_CLIENT_ID: process.env.WORKOS_CLIENT_ID,
  WORKOS_REDIRECT_URI: process.env.WORKOS_REDIRECT_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  BYTESCALE_API_KEY: process.env.BYTESCALE_API_KEY,
  UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
  UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
} satisfies EnvServerSchema);

if (!envServerParsed.success) {
  // TODO - Improve logging + configure Sentry
  console.error(envServerParsed.error.issues);

  throw new Error('There is an error with the server environment variables');
}

export const envServerData = envServerParsed.data;

type EnvServerSchemaType = z.infer<typeof envServerSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvServerSchemaType {}
  }
}
