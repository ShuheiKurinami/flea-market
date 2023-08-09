import { userInfoSample } from '../controller/userrepository/userInfo';

export interface IUserMasterRepository {
  findByBaseId(id: number): Promise<userInfoSample>;
}
