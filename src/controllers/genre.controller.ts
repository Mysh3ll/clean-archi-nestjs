import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateGenreDto, Genre, UpdateGenreDto } from '../core';
import { GenreUseCase, GenreFactoryService } from '../use-cases/genre';
import { CreateGenreResponseDto } from '../core/dtos/genre/create-genre-response.dto';

@Controller('api/genres')
export class GenreController {
  #genreUseCases: GenreUseCase;
  #genreFactoryService: GenreFactoryService;

  constructor(
    genreUseCases: GenreUseCase,
    genreFactoryService: GenreFactoryService,
  ) {
    this.#genreUseCases = genreUseCases;
    this.#genreFactoryService = genreFactoryService;
  }

  @Get()
  async getAll(): Promise<Genre[]> {
    return await this.#genreUseCases.getAllGenres();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Genre> {
    return await this.#genreUseCases.getGenreById(id);
  }

  @Post()
  async createGenre(@Body() genreDto: CreateGenreDto) {
    const createdGenreResponse = new CreateGenreResponseDto();
    try {
      const genre = this.#genreFactoryService.createNewGenre(genreDto);
      const createdGenre = await this.#genreUseCases.createGenre(genre);

      createdGenreResponse.success = true;
      createdGenreResponse.createdGenre = createdGenre;
    } catch (error) {
      createdGenreResponse.success = false;
    }

    return createdGenreResponse;
  }

  @Put(':id')
  async updateGenre(
    @Param('id') genreId: string,
    @Body() updateGenreDto: UpdateGenreDto,
  ) {
    return await this.#genreUseCases.updateGenre(genreId, updateGenreDto);
  }
}
