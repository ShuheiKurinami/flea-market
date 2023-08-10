import { Controller, Get, Inject } from '@nestjs/common';
import { userInfoSample } from './userrepository/userInfo';
import { UserMasterTokens } from '../userMaster.constants';
import { IUserMasterUseCase } from '../application/userMaster.usecase.interface';

@Controller('users')
export class UserMasterController {
  constructor(
    @Inject(UserMasterTokens.USECASE)
    private readonly userMasterUseCase: IUserMasterUseCase,
  ) {}

  @Get()
  async get(): Promise<userInfoSample> {
    return await this.userMasterUseCase.get();
  }
}
