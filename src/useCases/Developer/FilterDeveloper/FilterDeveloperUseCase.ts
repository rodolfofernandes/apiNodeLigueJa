import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"

export class FilterDeveloperUseCase {
    constructor (
        private developersRepository :IDevelopersRepository
    ){}

    async execute(queryParams: object){        
        
        if (Object.keys(queryParams).length !== 0) {

            return  await this.developersRepository.filter(queryParams)
              
        } else {
            throw new Error('No Query param available')
        }       
    }
}