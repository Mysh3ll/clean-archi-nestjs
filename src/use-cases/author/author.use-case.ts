import { Injectable } from '@nestjs/common';
import {
  Author,
  CreateAuthorDto,
  DataServices,
  UpdateAuthorDto,
} from '../../core';
import { AuthorFactoryService } from './author-factory.service';

@Injectable()
export class AuthorUseCase {
  #dataServices: DataServices;
  #authorFactoryService: AuthorFactoryService;

  constructor(
    dataServices: DataServices,
    authorFactoryService: AuthorFactoryService,
  ) {
    this.#dataServices = dataServices;
    this.#authorFactoryService = authorFactoryService;
  }

  async getAllAuthors(): Promise<Author[]> {
    return await this.#dataServices.authors.getAll();
  }

  async getAuthorById(id: string): Promise<Author> {
    return await this.#dataServices.authors.getById(id);
  }

  async createAuthor(createAuthorDto: CreateAuthorDto): Promise<Author> {
    const newAuthor =
      this.#authorFactoryService.createNewAuthor(createAuthorDto);
    return await this.#dataServices.authors.create(newAuthor);
  }

  async updateAuthor(
    id: string,
    updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    const author = this.#authorFactoryService.updateAuthor(updateAuthorDto);
    return await this.#dataServices.authors.update(id, author);
  }
}
