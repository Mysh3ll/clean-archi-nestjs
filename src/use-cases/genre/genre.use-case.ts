import { Injectable } from '@nestjs/common';
import { GenreFactoryService } from './genre-factory.service';
import {
  CreateGenreDto,
  DataServices,
  Genre,
  UpdateGenreDto,
} from '../../core';

@Injectable()
export class GenreUseCase {
  #dataServices: DataServices;
  #genreFactoryService: GenreFactoryService;

  constructor(
    dataServices: DataServices,
    genreFactoryService: GenreFactoryService,
  ) {
    this.#dataServices = dataServices;
    this.#genreFactoryService = genreFactoryService;
  }

  async getAllGenres(): Promise<Genre[]> {
    return await this.#dataServices.genres.getAll();
  }

  async getGenreById(id: string): Promise<Genre> {
    return await this.#dataServices.genres.getById(id);
  }

  async createGenre(createGenreDto: CreateGenreDto): Promise<Genre> {
    const newGenre = this.#genreFactoryService.createNewGenre(createGenreDto);
    return await this.#dataServices.genres.create(newGenre);
  }

  async updateGenre(
    id: string,
    updateGenreDto: UpdateGenreDto,
  ): Promise<Genre> {
    const genre = this.#genreFactoryService.updateGenre(updateGenreDto);
    return await this.#dataServices.genres.update(id, genre);
  }
}
