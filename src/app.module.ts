import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { UserMasterModule } from './users/userMaster.module';

@Module({
  imports: [ItemsModule, UserMasterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
