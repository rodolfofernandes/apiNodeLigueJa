import { DeveloperModel } from "../../../../database/models/DeveloperModel"
import { uuid } from "uuidv4"
import { filterDeveloperUseCase } from ".."

describe('Filter developer use case', () => {
    const developer = {
        id : uuid(),
        name : "New Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    const developer_1 = {
        id : uuid(),
        name : "New Developer 1",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    const developer_2 = {
        id : uuid(),
        name : "New Developer 1",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }
    
    beforeAll(async () => {
        await DeveloperModel.create(developer)
        await DeveloperModel.create(developer_1)
        await DeveloperModel.create(developer_2)
    })

    it('Should be able to filter Developers', async () => {
    
        const testFilter = await filterDeveloperUseCase.execute({
            name: "",
            sex: "m",
            age: "",
            hobby: "",
            birthdate: ""
        })
        
        expect(testFilter).toBeTruthy()       
    })

    it('Should be able to filter Developers single param', async () => {
    
        const testFilterOneParam = await filterDeveloperUseCase.execute({
            sex: "m"
        })
        
        expect(testFilterOneParam).toBeTruthy()       
    })

    it('Should not be able to filter Developers', async () => {

        await expect(filterDeveloperUseCase.execute({}))
        .rejects
        .toEqual(new Error('No Query param available'))    
    })


})