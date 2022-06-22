import { Injectable } from '@nestjs/common';
import { Author, CreateAuthorDto, UpdateAuthorDto } from '../../core';

@Injectable()
export class AuthorFactoryService {
  createNewAuthor(createAuthorDto: CreateAuthorDto) {
    const newAuthor = new Author();
    newAuthor.firstName = createAuthorDto.firstName;
    newAuthor.lastName = createAuthorDto.lastName;

    return newAuthor;
  }

  updateAuthor(updateAuthorDto: UpdateAuthorDto) {
    const newAuthor = new Author();
    newAuthor.firstName = updateAuthorDto.firstName;
    newAuthor.lastName = updateAuthorDto.lastName;

    return newAuthor;
  }
}
