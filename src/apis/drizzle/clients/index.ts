import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { configs } from 'src/configs/configs';
import * as schema from 'src/schemas/index'

const connection = postgres(
  `postgres://${configs.DB_USERNAME}:${configs.DB_PASSWORD}@${configs.DB_HOST}:${configs.DB_PORT}/${configs.DB_PASSWORD}`,
);

const migrationClient = drizzle(connection, { schema });

export { connection, migrationClient };
