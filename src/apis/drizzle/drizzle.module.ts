import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DrizzlePostgresModule } from '@knaadh/nestjs-drizzle-postgres';
import * as schema from 'src/schemas/index'

Module({
  imports: [
    DrizzlePostgresModule.registerAsync({
      imports: [ConfigModule],
      tag: 'POSTGRES',
      useFactory: async (configService: ConfigService) => ({
        postgres: {
          url: configService.get<string>('DATABASE_URL'),
          config: {
            username: configService.get<string>('DB_NAME'),
            password: configService.get<string>('DB_PASSWORD'),
            connect_timeout: 30,
          },
        },
        config: { schema: { ...schema } },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [],
});
export class DrizzleModule {}
