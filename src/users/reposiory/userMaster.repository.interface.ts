import { userInfoSample } from '../controller/userrepository/userInfo';

export interface IUserMasterRepository {
  findById(id: number): Promise<userInfoSample>;
}
