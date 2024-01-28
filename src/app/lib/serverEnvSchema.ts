import z from 'zod';

const envVariableSchema = z.string().trim().min(1);
const envServerSchema = z.object({
  WORKOS_API_KEY: envVariableSchema,
  WORKOS_CLIENT_ID: envVariableSchema,
  WORKOS_REDIRECT_URI: envVariableSchema,
  JWT_SECRET_KEY: envVariableSchema,
  REPLICATE_API_TOKEN: envVariableSchema,
  REPLICATE_WEBHOOK_SECRET: envVariableSchema,
});

type EnvServerSchema = z.infer<typeof envServerSchema>;

const envServerParsed = envServerSchema.safeParse({
  WORKOS_API_KEY: process.env.WORKOS_API_KEY,
  WORKOS_CLIENT_ID: process.env.WORKOS_CLIENT_ID,
  WORKOS_REDIRECT_URI: process.env.WORKOS_REDIRECT_URI,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN,
  REPLICATE_WEBHOOK_SECRET: process.env.REPLICATE_WEBHOOK_SECRET,
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
