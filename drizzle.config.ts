import { defineConfig } from 'drizzle-kit';
import { configs } from 'src/configs/configs';

export default defineConfig({
  schema: './src/schemas/index.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: configs.DB_HOST,
    user: configs.DB_USERNAME,
    password: configs.DB_PASSWORD,
    database: configs.DB_NAME,
  },
});
