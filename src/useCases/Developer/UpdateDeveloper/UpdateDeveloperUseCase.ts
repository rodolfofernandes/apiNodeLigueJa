import { Developer } from "../../../entities/Developer"
import { IDevelopersRepository } from "../../../repositories/IDevelopersRepository"
import { IUpdateDeveloperRequestDTO } from "./UpdateDeveloperDTO"

export class UpdateDeveloperUseCase {
    constructor(
        private developersRespository: IDevelopersRepository
    ) {}

    async execute(data: IUpdateDeveloperRequestDTO, id: string){
        const developer: Developer = {
            id: id,
            name: data.name,
            sex: data.sex,
            age: data.age,
            hobby: data.hobby,
            birthdate: data.birthdate            
        }
        
        const findDeveloper = await this.developersRespository.findById(id)

        if (findDeveloper) {
            return await this.developersRespository.update(developer)
        } else {
            throw new Error('Developer not exists.')
        }
    }
}