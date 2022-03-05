import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Todo } from './todo/todo.entity';
import { TodoModule } from './todo/todo.module';
import { Folder } from './folder/folder.entity';
import { FolderModule } from './folder/folder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ensolvers_db',
      entities: [Todo, Folder],
      synchronize: true,
      dropSchema: true,
    }),
    TodoModule,
    FolderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
