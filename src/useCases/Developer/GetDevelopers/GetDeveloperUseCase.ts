import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"

export class GetDeveloperUseCase {
    constructor(
        private developersRepository: IDevelopersRepository,
        public allDevelopers = []
    ){}

    async execute() {
        this.allDevelopers = await this.developersRepository.findAll()
        
        if (this.allDevelopers.length === 0) {
            throw new Error('Developers not found')
        } else {
     
            return this.allDevelopers
        }        
    }
}