import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma.service';

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(userInput: Prisma.UserCreateInput) {
    try {
      const hashedPassword = await bcrypt.hash(
        userInput.password,
        saltOrRounds,
      );
      userInput.password = hashedPassword;
      const newUser = await this.prisma.user.create({
        data: userInput,
      });
      return newUser;
    } catch (error) {
      console.error(error);
    }
  }

  async findOne(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    try {
      return await this.prisma.user.findUnique({
        where: userWhereUniqueInput,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
