import { Author, GenericRepository } from '../../../core';

export class InMemoryGenericRepository<T> implements GenericRepository<T> {
  #authors: Author[];

  constructor(authors: Author[] = []) {
    this.#authors = authors;
  }

  async getAll(): Promise<T[]> {
    return this.#authors as unknown as T[];
  }

  async getById(id: string): Promise<T> {
    return (await this.#authors.find(
      (author) => author.firstName === id,
    )) as unknown as T;
  }

  async create(item: T): Promise<T> {
    this.#authors.push(item as unknown as Author);
    return Promise.resolve(item);
  }

  async update(id: string, item: T) {
    const index = this.#authors.findIndex((author) => author.firstName === id);
    this.#authors[index] = item as unknown as Author;
    return Promise.resolve(this.#authors[index] as unknown as T);
  }
}
