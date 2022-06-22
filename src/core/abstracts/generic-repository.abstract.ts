export abstract class GenericRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: string): Promise<T>;
  abstract create(entity: T): Promise<T>;
  abstract update(id: string, entity: T): Promise<T>;
}
