import { Module } from '@nestjs/common';
import { InMemoryDataServicesModule } from './frameworks/data-services/in-memory/in-memory-data-services.module';
import { AuthorUseCasesModule } from './use-cases/author';
import {
  AppController,
  AuthorController,
  GenreController,
} from './controllers';
import { GenreUseCasesModule } from './use-cases/genre';
import { BookController } from './controllers/book.controller';
import { BookUseCasesModule } from './use-cases/book';

@Module({
  imports: [
    InMemoryDataServicesModule,
    AuthorUseCasesModule,
    BookUseCasesModule,
    GenreUseCasesModule,
  ],
  controllers: [
    AppController,
    AuthorController,
    GenreController,
    BookController,
  ],
  providers: [],
})
export class AppModule {}
