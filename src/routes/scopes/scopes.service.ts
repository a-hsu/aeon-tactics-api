import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class ScopesService {
  constructor(private prisma: PrismaService) {}

  // async createScopes() {}
  // async getScope() {}
  // async deleteScope() {}
  // async updateScope() {}
}
