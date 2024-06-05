import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { databaseSchema } from 'src/schemas';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

@Injectable()
export class AccountsService {
  constructor(@Inject('DB_PROD') private db: NodePgDatabase<typeof databaseSchema>) {}

  async findAll() {
    return await this.db.query.accounts.findMany()
  }

  // async findOne(id: number) {
  //   const account = await this.drizzleService.db
  //     .select()
  //     .from(databaseSchema.accounts)
  //     .where(eq(databaseSchema.accounts.id, id));
  //   const data = account.pop();
  //   if (!data) {
  //     throw new NotFoundException();
  //   }
  //   return data;
  // }

  // async create(createAccountDto: CreateAccountDto) {
  //   const createdAccount = await this.drizzleService.db
  //     .insert(databaseSchema.accounts)
  //     .values(createAccountDto)
  //     .returning();

  //   return createdAccount.pop();
  // }

  // async update(id: number, updateAccountDto: UpdateAccountDto) {
  //   const updatedAccount = await this.drizzleService.db
  //     .update(databaseSchema.accounts)
  //     .set(updateAccountDto)
  //     .where(eq(databaseSchema.accounts.id, id))
  //     .returning();

  //   if (updatedAccount.length === 0) {
  //     throw new NotFoundException();
  //   }

  //   return updatedAccount.pop();
  // }

  // async remove(id: number) {
  //   const deleted = await this.drizzleService.db
  //     .delete(databaseSchema.accounts)
  //     .where(eq(databaseSchema.accounts.id, id))
  //     .returning();

  //   if (deleted.length === 0) {
  //     throw new NotFoundException();
  //   }
  // }
}
