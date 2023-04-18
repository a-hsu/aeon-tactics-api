import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { User } from 'src/lib/interfaces/prisma-types';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //   @Post()
  //   create(){}

  //   @Get()
  //   findAll(){}

  //   @Put('/:id')
  //   update(){}

  //   @Delete('/:id')
  //   delete(){}
  // }
}
