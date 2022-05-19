import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"
import { ICreateDeveloperRequestDTO } from "./CreateDeveloperDTO"
import { Developer } from "../../../entities/Developer"

export class CreateDeveloperUseCase {
  constructor(
    private developersRepository: IDevelopersRepository,
  ) {}

  async execute(data: ICreateDeveloperRequestDTO) {
   
    const developerAlreadyExists = await this.developersRepository.findByName(data.name)
    
    if (developerAlreadyExists) {
      throw new Error('Developer already exists.')
    }

    const developer = new Developer(data)

    return  await this.developersRepository.save(developer)   
  }
}