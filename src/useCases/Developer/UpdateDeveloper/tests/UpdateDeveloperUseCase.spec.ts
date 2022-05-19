import { updateDeveloperUseCase } from ".."
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Update a developer Use Case', () => {
    
    const developer = {
        id: '8af9af46-50d1-486e-a8c9-d3271568aea3',
        name : "Update Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    beforeAll(async () => {
        await DeveloperModel.create(developer)
    })

    it('Should be able to update a developer', async () => {       
        
        const testUpdateDeveloper = await updateDeveloperUseCase.execute({
            name : "updated Developer",
            sex : 'F',
            age: 20,
            hobby: 'tamboreu',
            birthdate: new Date('1990/05/20')
        }, developer.id )

        expect(testUpdateDeveloper).toBeTruthy()

        await DeveloperModel.destroy({
            where : {
                id : developer.id
            }
        })    
    })

    it("Should not be able to update an existing developer", async () => {
        await expect(updateDeveloperUseCase.execute(developer, "8af9af46-50d1-486e-a8c9-d3271568aea3"))
        .rejects
        .toEqual(new Error('Developer not exists.'))       
    })
})