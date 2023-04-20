import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  username: string;
  password: string;
}
