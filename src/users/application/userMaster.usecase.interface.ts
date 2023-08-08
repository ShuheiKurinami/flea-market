import { User as PrismaUserMaster } from '@prisma/client';
import { userInfoSample } from '../controller/userrepository/userInfo';

export interface IUserMasterUseCase {
  get(): Promise<userInfoSample>;
}
