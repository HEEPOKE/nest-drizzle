import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { migrationClient, connection } from '../clients';

migrate(migrationClient, { migrationsFolder: './drizzles' });

connection.end();
