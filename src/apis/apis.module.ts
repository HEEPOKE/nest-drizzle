import { Module } from '@nestjs/common';
import { DrizzleModule } from './drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [],
})
export class ApisModule {}
