import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCat(): string {
    return `returning a cat`;
  }
}
