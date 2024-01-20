import z from 'zod';

const envServerSchema = z.object({
  WORKOS_API_KEY: z.string().trim().min(1),
  WORKOS_CLIENT_ID: z.string().trim().min(1),
  WORKOS_REDIRECT_URI: z.string().trim().min(1),
});

const envServerParsed = envServerSchema.safeParse({
  WORKOS_API_KEY: process.env.WORKOS_API_KEY,
  WORKOS_CLIENT_ID: process.env.WORKOS_CLIENT_ID,
  WORKOS_REDIRECT_URI: process.env.WORKOS_REDIRECT_URI,
});

if (!envServerParsed.success) {
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
