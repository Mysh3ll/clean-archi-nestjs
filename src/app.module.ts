import { Module } from '@nestjs/common';
import { InMemoryDataServicesModule } from './frameworks/data-services/in-memory/in-memory-data-services.module';
import { AuthorUseCasesModule } from './use-cases/author/author-use-case.module';
import { AppController } from './controllers';
import { AuthorController } from './controllers/author.controller';

@Module({
  imports: [InMemoryDataServicesModule, AuthorUseCasesModule],
  controllers: [AppController, AuthorController],
  providers: [],
})
export class AppModule {}
