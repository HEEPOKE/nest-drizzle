import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AccountsModule } from './modules/accounts/accounts.module';
import { globalConfig } from 'src/configs/configs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '.env',
      load: [globalConfig],
    }),
    DrizzleModule,
    AccountsModule,
  ],
  providers: [],
})
export class ApisModule {}
