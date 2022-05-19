import { Developer } from "../entities/Developer"

export interface IDevelopersRepository {
  findByName(name: string): Promise<Developer>
  save(developer: Developer): Promise<any>
  findById(id: string): Promise<any>
  findAll(): Promise<any>
  update(developer:Developer): Promise<void>
  delete(id:string): Promise<number>
  deleteByName(name:string): Promise<void>
  filter(queryParams: object): Promise<any>
}