import {
  serial,
  text,
  integer,
  timestamp,
  pgTable,
  pgEnum,
} from 'drizzle-orm/pg-core';

const roles = pgEnum('roles', ['admin', 'user']);

const accounts = pgTable('accounts', {
  id: serial('id').primaryKey(),
  email: text('email'),
  username: text('username'),
  phoneNumber: text('phone_number'),
  role: roles('role').default('user'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

const stores = pgTable('stores', {
  id: serial('id').primaryKey(),
  name: text('name'),
  email: text('email'),
  phoneNumber: text('phone_number'),
  accountId: integer('account_id').references(() => accounts.id),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdateFn(() => new Date()),
});

export const databaseSchema = {
  roles,
  accounts,
  stores,
};
