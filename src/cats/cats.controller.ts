import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // @Post()
  // create() {}

  @Get()
  findCat() {
    console.log('got to cats');
    return this.catsService.getCat();
  }

  // @Put('/:id')
  // update() {}

  // @Delete('/:id')
  // delete() {}
}
