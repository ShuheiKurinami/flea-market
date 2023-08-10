import { Injectable } from '@nestjs/common';
import { IUserMasterRepository } from './userMaster.repository.interface';
import { userInfoSample } from '../controller/userrepository/userInfo';
import { PrismaService } from 'src/common/prisma.service';

@Injectable()
export class UserMasterRepository implements IUserMasterRepository {
  constructor(private prisma: PrismaService) {}

  findById = async (id: number): Promise<userInfoSample> => {
    const results = await this.prisma.userMaster.findUnique({
      where: {
        id: id,
      },
      select: {
        name: true,
        //password: true,
      },
    });
    console.log(results);

    return results;
  };
}
