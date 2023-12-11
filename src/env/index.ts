import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333), // coerce pega o dado e converte no formato que pede em seguida
});

const _env = envSchema.safeParse(process.env); // safeParse vai  tentar validar o process.env

if (_env.success === false) {
  console.error("❌ Invalid environment variables", _env.error.format());
  throw new Error("❌ Invalid environment variables");
}

export const env = _env.data;
