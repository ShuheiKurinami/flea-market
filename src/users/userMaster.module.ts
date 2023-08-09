import { Module } from '@nestjs/common';
import { UserMasterController } from './controller/userMaster.controller';
import { UserMasterTokens } from './userMaster.constants';
import { UserMasterUseCase } from './application/userMaster.usecase';
import { UserMasterRepository } from './reposiory/userMaster.repository';
import { PrismaModule } from 'src/common/prisma.module';

@Module({
  controllers: [UserMasterController],
  imports: [PrismaModule],
  providers: [
    {
      provide: UserMasterTokens.USECASE,
      useClass: UserMasterUseCase,
    },
    {
      provide: UserMasterTokens.REPOSITORY,
      useClass: UserMasterRepository,
    },
  ],
})
export class UserMasterModule {}
