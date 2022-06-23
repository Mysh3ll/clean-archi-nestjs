import { Author, Book, GenericRepository, Genre } from '../../../core';

type Model = Author | Book | Genre;

const isArrayOf =
  <T>(item: (x: any) => x is T) =>
  (arr: any[]): arr is Array<T> =>
    arr.every(item);

const isInstanceOf =
  <T>(entity: new (...args: any) => T) =>
  (x: any): x is T =>
    x instanceof entity;

export class InMemoryGenericRepository<T> implements GenericRepository<T> {
  // #model: Model[];

  constructor(private readonly model: Model[] = []) {
    // this.#model = model;
  }

  async getAll(): Promise<T[]> {
    return this.model as unknown as T[];
  }

  async getById(id: string): Promise<T> {
    if (isArrayOf(isInstanceOf(Author))(this.model)) {
      return Promise.resolve(
        this.model.find((author) =>
          author instanceof Author ? author.firstName === id : null,
        ) as unknown as T,
      );
    }
    if (isArrayOf(isInstanceOf(Genre))(this.model)) {
      return Promise.resolve(
        this.model.find((genre) =>
          genre instanceof Genre ? genre.name === id : null,
        ) as unknown as T,
      );
    }

    return Promise.reject('Invalid model type');
  }

  async create(item: T): Promise<T> {
    this.model.push(item as unknown as Model);
    return Promise.resolve(item);
  }

  async update(id: string, item: T) {
    const index = this.model.findIndex((entity) => {
      if (entity instanceof Author) {
        return entity.firstName === id;
      }
      if (entity instanceof Genre) {
        return entity.name === id;
      }
      return false;
    });
    this.model[index] = item as unknown as Model;
    return Promise.resolve(this.model[index] as unknown as T);
  }
}
