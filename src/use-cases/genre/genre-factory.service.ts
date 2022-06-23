import { Injectable } from '@nestjs/common';
import { Genre, CreateGenreDto, UpdateGenreDto } from '../../core';

@Injectable()
export class GenreFactoryService {
  createNewGenre(createGenreDto: CreateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = createGenreDto.name;

    return newGenre;
  }

  updateGenre(updateGenreDto: UpdateGenreDto) {
    const newGenre = new Genre();
    newGenre.name = updateGenreDto.name;

    return newGenre;
  }
}
