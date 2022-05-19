import { getDeveloperIdUseCase } from ".."
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Get developer by id use case', () => {
    
    const developer  = {
        id: '8af9af46-50d1-486e-a8c9-d3271568aea3',
        name : "Delete Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    it('Should be able to get a developer by id', async () => {

        await DeveloperModel.create(developer)

        const testGetDeveloperById = await getDeveloperIdUseCase.execute({ id: developer.id })

        expect(testGetDeveloperById).toHaveProperty("id")

        await DeveloperModel.destroy({
            where : {
                id: developer.id
            }
        })
    })

    it('Should not to be able to get developer by id', async () => {
      await  expect(getDeveloperIdUseCase.execute({ id: developer.id }))
        .rejects
        .toEqual(new Error('Developer not found'))
    })
})