import { Module } from '@nestjs/common';
import { MicrocreditService } from './microcredit.service';
import { MicrocreditController } from './microcredit.controller';

@Module({
  providers: [MicrocreditService],
  controllers: [MicrocreditController]
})
export class MicrocreditModule {}
