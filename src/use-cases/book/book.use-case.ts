import { Injectable } from '@nestjs/common';
import { BookFactoryService } from './book-factory.service';
import { Book, DataServices } from '../../core';

@Injectable()
export class BookUseCase {
  #dataServices: DataServices;
  #bookFactoryService: BookFactoryService;

  constructor(
    dataServices: DataServices,
    bookFactoryService: BookFactoryService,
  ) {
    this.#dataServices = dataServices;
    this.#bookFactoryService = bookFactoryService;
  }

  async getAllBooks(): Promise<Book[]> {
    return await this.#dataServices.books.getAll();
  }

  async getBookById(id: string): Promise<Book> {
    return await this.#dataServices.books.getById(id);
  }

  async createBook(book: Book): Promise<Book> {
    return await this.#dataServices.books.create(book);
  }

  async updateBook(id: string, book: Book): Promise<Book> {
    return await this.#dataServices.books.update(id, book);
  }
}
