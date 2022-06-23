import { Module } from '@nestjs/common';
import { InMemoryServicesModule } from '../../services/data-services/in-memory-services.module';
import { BookFactoryService } from './book-factory.service';
import { BookUseCase } from './book.use-case';

@Module({
  imports: [InMemoryServicesModule],
  providers: [BookFactoryService, BookUseCase],
  exports: [BookFactoryService, BookUseCase],
})
export class BookUseCasesModule {}
