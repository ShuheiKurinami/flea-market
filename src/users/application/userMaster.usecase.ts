import { Injectable, Inject } from '@nestjs/common';
import { IUserMasterUseCase } from './userMaster.usecase.interface';
import { userInfoSample } from '../controller/userrepository/userInfo';
import { UserMasterTokens } from '../userMaster.constants';
import { IUserMasterRepository } from '../reposiory/userMaster.repository.interface';

@Injectable()
export class UserMasterUseCase implements IUserMasterUseCase {
  constructor(
    @Inject(UserMasterTokens.REPOSITORY)
    private readonly userMasterRepository: IUserMasterRepository,
  ) {}
  get = async (): Promise<userInfoSample> => {
    const id = 1; // TODO
    return await this.userMasterRepository.findById(id);
  };
}
