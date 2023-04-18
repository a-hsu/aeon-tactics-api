import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UsersService } from '../users/users.service';
// todo: install jwt
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async signIn(username: string, pass: string) {
    try {
      console.log('auth service sign in');
      if (!username) {
        throw new Error('Missing Credentials');
      }
      const userWhereUniqueInput: Prisma.UserWhereUniqueInput = { username };
      const user = await this.usersService.findOne(userWhereUniqueInput);

      // todo: hash password first using bcrypt
      if (user?.password !== pass) {
        throw new UnauthorizedException();
      }
      // todo: create an access token through jwt
      // const payload = { username: user.username, sub: user.id };
      // return {
      //   access_token: await this.jwtService.signAsync(payload)
      // }
      const { password, ...result } = user;

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
