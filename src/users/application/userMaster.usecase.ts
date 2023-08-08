import { Injectable } from '@nestjs/common';
import { IUserMasterUseCase } from './userMaster.usecase.interface';
import { userInfoSample } from '../controller/userrepository/userInfo';

@Injectable()
export class UserMasterUseCase implements IUserMasterUseCase {
  get = async (): Promise<userInfoSample> => {
    const id = '1'; // TODO
    return await this.userMasterRepository.findByBaseId(id);
  };
}
