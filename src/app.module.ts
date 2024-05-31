import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { globalConfig } from './configs/configs';
import { ApisModule } from './apis/apis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      envFilePath: '.env',
      load: [globalConfig],
    }),
    ApisModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
