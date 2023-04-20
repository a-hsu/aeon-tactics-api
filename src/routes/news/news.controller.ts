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
import { NewsService } from './news.service';
import { PostDto } from './newsDto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post('new')
  createPost(@Body() newPostData: Prisma.PostCreateInput) {
    /*
    export type PostCreateInput = {
    id?: string
    title: string
    subtitle: string
    content: string
    createdAt?: Date | string
    updatedAt: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    tags?: TagCreateNestedManyWithoutPostsInput
  }
    */
    this.newsService.createPost(newPostData);
  }

  // @Get()
  // getPosts() {}

  // @Get()
  // getUniquePost() {}

  // @Put('/:id')
  // updatePost() {}

  // @Delete('/:id')
  // deletePost() {}
}
