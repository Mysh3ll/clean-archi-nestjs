import { Module } from '@nestjs/common';
import { InMemoryServicesModule } from '../../services/data-services/in-memory-services.module';
import { AuthorFactoryService } from './author-factory.service';
import { AuthorUseCase } from './author.use-case';

@Module({
  imports: [InMemoryServicesModule],
  providers: [AuthorFactoryService, AuthorUseCase],
  exports: [AuthorFactoryService, AuthorUseCase],
})
export class AuthorUseCasesModule {}
