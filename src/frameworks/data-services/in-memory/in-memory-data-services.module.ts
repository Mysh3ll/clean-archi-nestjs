import { Module } from '@nestjs/common';
import { DataServices } from '../../../core';
import { InMemoryDataServices } from './in-memory-data-services.service';

@Module({
  exports: [DataServices],
  providers: [
    {
      provide: DataServices,
      useClass: InMemoryDataServices,
    },
  ],
})
export class InMemoryDataServicesModule {}
