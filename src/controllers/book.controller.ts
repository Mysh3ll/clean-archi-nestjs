import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Book, CreateBookDto, UpdateBookDto } from '../core';
import { BookFactoryService, BookUseCase } from '../use-cases/book';
import { CreateBookResponseDto } from '../core/dtos/book/create-book-response.dto';
import { AuthorUseCase } from '../use-cases/author';
import { GenreUseCase } from '../use-cases/genre';

@Controller('api/books')
export class BookController {
  #authorUseCases: AuthorUseCase;
  #bookUseCases: BookUseCase;
  #genreUseCases: GenreUseCase;
  #bookFactoryService: BookFactoryService;

  constructor(
    authorUseCases: AuthorUseCase,
    bookUseCases: BookUseCase,
    genreUseCases: GenreUseCase,
    bookFactoryService: BookFactoryService,
  ) {
    this.#authorUseCases = authorUseCases;
    this.#bookUseCases = bookUseCases;
    this.#genreUseCases = genreUseCases;
    this.#bookFactoryService = bookFactoryService;
  }

  @Get()
  async getAll(): Promise<Book[]> {
    return await this.#bookUseCases.getAllBooks();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Book> {
    return await this.#bookUseCases.getBookById(id);
  }

  @Post()
  async createBook(@Body() bookDto: CreateBookDto) {
    const createdBookResponse = new CreateBookResponseDto();
    try {
      const author = await this.#authorUseCases.getAuthorById(bookDto.authorId);
      const genre = await this.#genreUseCases.getGenreById(bookDto.genreId);

      const book = this.#bookFactoryService.createNewBook(
        bookDto,
        author,
        genre,
      );
      const createdBook = await this.#bookUseCases.createBook(book);

      createdBookResponse.success = true;
      createdBookResponse.createdBook = createdBook;
    } catch (error) {
      createdBookResponse.success = false;
    }

    return createdBookResponse;
  }

  @Put(':id')
  async updateBook(
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const author = await this.#authorUseCases.getAuthorById(
      updateBookDto.authorId,
    );
    const genre = await this.#genreUseCases.getGenreById(updateBookDto.genreId);

    const book = this.#bookFactoryService.updateBook(
      updateBookDto,
      author,
      genre,
    );
    return await this.#bookUseCases.updateBook(bookId, book);
  }
}
