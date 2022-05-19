import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"
import { IGetDeveloperRequestDTO } from "./GetDeveloperDTO"

export class GetDeveloperIdUseCase {
    constructor(
        private developersRepository: IDevelopersRepository
    ){}

    async execute(data: IGetDeveloperRequestDTO) {
        const developer = await this.developersRepository.findById(data.id)

    if (!developer) {
        throw new Error('Developer not found')  
      }
  
     return developer
    }
}