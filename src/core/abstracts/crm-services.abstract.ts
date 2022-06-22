import { Book } from '../entities';

export abstract class CrmServices {
  abstract bookAdded(book: Book): Promise<boolean>;
}
