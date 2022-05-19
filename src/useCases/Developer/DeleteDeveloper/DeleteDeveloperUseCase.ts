import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"
import { IDeleteDeveloperRequestDTO } from "./DeleteDeveloperDTO"

export class DeleteDeveloperUseCase {
  constructor(
    private developersRepository:IDevelopersRepository
  ) {}

    async execute(data: IDeleteDeveloperRequestDTO) {

      const developerAlreadyExists = await this.developersRepository.findById(data.id)
      
      if(developerAlreadyExists) {
       return await this.developersRepository.delete(data.id)
      } else {
        throw new Error('Developer not exists')
      }
    }
 }
