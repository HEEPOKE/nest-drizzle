import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { configs } from 'src/configs/configs';
import * as schema from 'src/schemas/index';

const connection = new Pool({
  connectionString: `postgres://${configs.DB_USERNAME}:${configs.DB_PASSWORD}@${configs.DB_HOST}:${configs.DB_PORT}/${configs.DB_NAME}`,
});

const migrationClient = drizzle(connection, { schema });

export { connection, migrationClient };
