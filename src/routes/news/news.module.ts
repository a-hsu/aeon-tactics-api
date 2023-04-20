import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

@Module({
  controllers: [NewsController],
  providers: [PrismaService, NewsService],
})
export class NewsModule {}
