import { Module } from '@nestjs/common';
import { InMemoryDataServicesModule } from './frameworks/data-services/in-memory/in-memory-data-services.module';
import { AuthorUseCasesModule } from './use-cases/author';
import {
  AppController,
  AuthorController,
  GenreController,
} from './controllers';
import { GenreUseCasesModule } from './use-cases/genre';

@Module({
  imports: [
    InMemoryDataServicesModule,
    AuthorUseCasesModule,
    GenreUseCasesModule,
  ],
  controllers: [AppController, AuthorController, GenreController],
  providers: [],
})
export class AppModule {}
