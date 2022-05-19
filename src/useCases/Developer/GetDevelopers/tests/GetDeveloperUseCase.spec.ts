
import { uuid } from "uuidv4"
import { getDeveloperUseCase } from ".."
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Get developer use case', () => {
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

    beforeAll(async () => {
        await DeveloperModel.create(developer)
        await DeveloperModel.create(developer_1)
    })

    it('should be able to get all developers', async () => {

        expect(await getDeveloperUseCase.execute()).toBeTruthy

        await DeveloperModel.destroy({
            where: {
                name: ['New Developer 1', 'New Developer']           
            }            
        })

    })

    it('should not be able to get all developers', async () => {
        await expect(getDeveloperUseCase.execute())
        .rejects
        .toEqual(new Error('Developers not found'))
    })

})