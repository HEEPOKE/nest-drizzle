import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DrizzlePGModule } from '@knaadh/nestjs-drizzle-pg';
import { globalConfig } from 'src/configs/configs';
import { databaseSchema } from 'src/schemas';
import { AccountsModule } from './modules/accounts/accounts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '.env',
      load: [globalConfig],
    }),
    DrizzlePGModule.registerAsync({
      tag: 'DB_PROD',
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory(configService: ConfigService) {
        return {
          pg: {
            connection: 'client',
            config: {
              connectionString: configService.get<string>('DATABASE_URL'),
            },
          },
          config: { schema: databaseSchema },
        };
      },
    }),
    AccountsModule,
  ],
  providers: [],
})
export class ApisModule {}
