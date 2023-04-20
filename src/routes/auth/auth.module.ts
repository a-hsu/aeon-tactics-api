import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

const secret = process.env.JWT_SECRET;

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, UsersService, PrismaService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
