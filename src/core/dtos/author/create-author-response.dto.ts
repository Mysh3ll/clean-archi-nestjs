import { Author } from '../../entities';

export class CreateAuthorResponseDto {
  success: boolean;
  createdAuthor: Author;
}
