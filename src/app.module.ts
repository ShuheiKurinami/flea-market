import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { UserMasterModule } from './users/userMaster.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [ItemsModule, UserMasterModule, PrismaService],
  controllers: [],
  providers: [],
})
export class AppModule {}
