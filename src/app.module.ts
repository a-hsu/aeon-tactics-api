import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './routes/auth/auth.module';
import { NewsModule } from './routes/news/news.module';
import { ScopesModule } from './routes/scopes/scopes.module';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    // ScopesModule,
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
