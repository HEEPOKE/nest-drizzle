import { defineConfig } from 'drizzle-kit';
import { configs } from 'src/configs/configs';

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/schemas//index.ts',
  out: './drizzles',
  dbCredentials: {
    url: `postgresql://${configs.DB_USERNAME}:${configs.DB_PASSWORD}@${configs.DB_HOST}:${configs.DB_PORT}/${configs.DB_NAME}`,
  },
});
