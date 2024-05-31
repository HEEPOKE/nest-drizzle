import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { connection, migrationClient } from '../clients';

migrate(migrationClient, { migrationsFolder: './drizzles' });

connection.end()
