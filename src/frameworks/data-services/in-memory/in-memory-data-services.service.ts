import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Author, Book, DataServices, Genre } from '../../../core';
import { InMemoryGenericRepository } from './in-memory-generic-repository';

@Injectable()
export class InMemoryDataServices
  implements DataServices, OnApplicationBootstrap
{
  authors: InMemoryGenericRepository<Author>;
  books: InMemoryGenericRepository<Book>;
  genres: InMemoryGenericRepository<Genre>;

  onApplicationBootstrap() {
    this.authors = new InMemoryGenericRepository<Author>([]);
    this.books = new InMemoryGenericRepository<Book>([]);
    this.genres = new InMemoryGenericRepository<Genre>([]);
  }
}
