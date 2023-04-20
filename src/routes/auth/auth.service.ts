import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async signIn(username: string, pass: string) {
    try {
      if (!username) {
        throw new Error('Missing Credentials');
      }
      const userWhereUniqueInput: Prisma.UserWhereUniqueInput = { username };
      const user = await this.usersService.findOne(userWhereUniqueInput);

      const isMatch = await bcrypt.compare(pass, user?.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { username: user.username, sub: user.id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (error) {
      console.error(error);
    }
  }
}
