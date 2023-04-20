import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  // @Post('scopes/:id')
  // async updateUserScope() {}
  //   @Post()
  //   create(){}
  @Post('new')
  async createUser(@Body() userInput: Prisma.UserCreateInput) {
    try {
      await this.userService.createUser(userInput);
    } catch (error) {
      console.error(error);
    }
  }
  //   @Get()
  //   findAll(){}

  //   @Put('/:id')
  //   update(){}

  //   @Delete('/:id')
  //   delete(){}
  // }
}
