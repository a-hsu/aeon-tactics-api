import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UsersController {
  // constructor(private readonly userService: UsersService) {}
  // @Post('new')
  // async signupUser(
  //   @Body() userData: { name?: string; email: string },
  // ): Promise<UserModel> {
  //   return this.userService.createUser(userData);
  // }
}
