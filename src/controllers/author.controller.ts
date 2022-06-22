import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { Author, CreateAuthorDto, UpdateAuthorDto } from '../core';
import { AuthorUseCase, AuthorFactoryService } from '../use-cases/author/';
import { CreateAuthorResponseDto } from '../core/dtos/author/create-author-response.dto';

@Controller('api/authors')
export class AuthorController {
  #authorUseCases: AuthorUseCase;
  #authorFactoryService: AuthorFactoryService;

  constructor(
    authorUseCases: AuthorUseCase,
    authorFactoryService: AuthorFactoryService,
  ) {
    this.#authorUseCases = authorUseCases;
    this.#authorFactoryService = authorFactoryService;
  }

  @Get()
  async getAll(): Promise<Author[]> {
    return await this.#authorUseCases.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Author> {
    return await this.#authorUseCases.getAuthorById(id);
  }

  @Post()
  async createAuthor(
    @Body() authorDto: CreateAuthorDto,
  ): Promise<CreateAuthorResponseDto> {
    const createdAuthorResponse = new CreateAuthorResponseDto();
    try {
      const author = this.#authorFactoryService.createNewAuthor(authorDto);
      const createdAuthor = await this.#authorUseCases.createAuthor(author);

      createdAuthorResponse.success = true;
      createdAuthorResponse.createdAuthor = createdAuthor;
    } catch (error) {
      createdAuthorResponse.success = false;
    }

    return createdAuthorResponse;
  }

  @Put(':id')
  async updateAuthor(
    @Param('id') authorId: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ): Promise<Author> {
    return await this.#authorUseCases.updateAuthor(authorId, updateAuthorDto);
  }
}
