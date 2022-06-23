import { Module } from '@nestjs/common';
import { InMemoryServicesModule } from '../../services/data-services/in-memory-services.module';
import { GenreFactoryService } from './genre-factory.service';
import { GenreUseCase } from './genre.use-case';

@Module({
  imports: [InMemoryServicesModule],
  providers: [GenreFactoryService, GenreUseCase],
  exports: [GenreFactoryService, GenreUseCase],
})
export class GenreUseCasesModule {}
