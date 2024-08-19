import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MicrocreditModule } from './microcredit/microcredit.module';

@Module({
  imports: [UsersModule, MicrocreditModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class AppModule {}
