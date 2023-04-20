import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async createPost(postInput: Prisma.PostCreateInput) {
    try {
      const newPost = this.prisma.post.create({
        data: postInput,
      });
      return newPost;
    } catch (error) {
      console.error(error);
    }
  }
  async findAllPosts(): Promise<Post[] | null> {
    try {
      return await this.prisma.post.findMany();
    } catch (error) {
      console.error(error);
    }
  }
  // async findPostsByTag(tagObjectIds): Promise<Post[] | null> {
  //   try {
  //     const hexedTags = tagObjectIds.map(e => e)
  //     return await this.prisma.post.findMany({
  //       where: {
  //         tagIDs: {
  //           hasSome: [newId1.toHexString(), newId2.toHexString()],
  //         },
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async findUniquePost(
    postWhereUniqueInput: Prisma.PostWhereUniqueInput,
  ): Promise<Post | null> {
    try {
      return await this.prisma.post.findUnique({
        where: postWhereUniqueInput,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
