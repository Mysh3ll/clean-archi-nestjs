import { Author, Book, Genre } from '../entities';
import { GenericRepository } from './generic-repository.abstract';

export abstract class DataServices {
  abstract authors: GenericRepository<Author>;
  abstract books: GenericRepository<Book>;
  abstract genres: GenericRepository<Genre>;
}
