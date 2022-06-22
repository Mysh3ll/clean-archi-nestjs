import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from '../core';
import { AuthorUseCase } from '../use-cases/author/author.use-case';

@Controller('api/authors')
export class AuthorController {
  constructor(private authorUseCases: AuthorUseCase) {}

  @Get()
  async getAll() {
    return this.authorUseCases.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.authorUseCases.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateAuthorDto) {
    return this.authorUseCases.createAuthor(authorDto);
  }

  @Put(':id')
  updateAuthor(
    @Param('id') authorId: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return this.authorUseCases.updateAuthor(authorId, updateAuthorDto);
  }
}
