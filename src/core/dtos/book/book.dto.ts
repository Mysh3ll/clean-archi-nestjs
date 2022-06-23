import { IsString, IsNotEmpty, IsDate, IsInstance } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { Author, Genre } from '../../entities';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  authorId: string;

  @IsNotEmpty()
  genreId: string;

  @IsDate()
  publishDate: Date;
}

export class CreateBookWithAuthorAndGenreDto extends PartialType(
  CreateBookDto,
) {
  @IsNotEmpty()
  @IsInstance(Author)
  author: Author;

  @IsNotEmpty()
  @IsInstance(Genre)
  genre: Genre;
}

export class UpdateBookDto extends PartialType(CreateBookDto) {}
export class UpdateBookWithAuthorAndGenreDto extends PartialType(
  CreateBookWithAuthorAndGenreDto,
) {}
