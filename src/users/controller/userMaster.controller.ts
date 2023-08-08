import {
    Controller,
    Get,
  } from '@nestjs/common';

  @Controller('users')

  @Get('account')
  async get(): Promise<userInfoSample> {
    return await this.userMasterUseCase.get();
  }