import { Module } from '@nestjs/common';
import { InMemoryDataServicesModule } from '../../frameworks/data-services/in-memory/in-memory-data-services.module';

@Module({
  imports: [InMemoryDataServicesModule],
  exports: [InMemoryDataServicesModule],
})
export class InMemoryServicesModule {}
