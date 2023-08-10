import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { UserMasterModule } from './users/userMaster.module';
import { PrismaModule } from './common/prisma.module';

@Module({
  imports: [ItemsModule, UserMasterModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
