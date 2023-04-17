import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  async getUser() {
    return await this.userService.user({
      email: 'a@mail.com',
    });
  }

  @Post('new')
  async createUser() {
    try {
      const newUser = await this.userService.createUser({
        email: 'b@mail.com',
        name: 'barry allen',
      });
      return newUser;
    } catch (error) {}
  }

  // @Get()
  // findAll() {}

  // @Put('/:id')
  // update() {}

  // @Delete('/:id')
  // delete() {}
}
