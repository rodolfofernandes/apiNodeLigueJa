import { createDeveloperUseCase } from ".."
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Create a developer use case', () => {

    const developer = {
        name : "New Developer create",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }
   
    it('should be able to create a new developer', async () => {
    
        const testCreateDeveloper  = await createDeveloperUseCase.execute(developer)

        expect(testCreateDeveloper).toHaveProperty("id")
        expect(testCreateDeveloper.name).toBe(developer.name)
        expect(testCreateDeveloper.sex).toBe(developer.sex)
        expect(testCreateDeveloper.age).toBe(developer.age)
        expect(testCreateDeveloper.hobby).toBe(developer.hobby)
        expect(new Date(testCreateDeveloper.birthdate).toISOString().split('T')[0])
            .toBe(new Date(developer.birthdate).toISOString().split('T')[0])
          
    })
    
    it("Should not be able to create an existing developer", async () => {
        await expect(createDeveloperUseCase.execute(developer))
        .rejects
        .toEqual(new Error('Developer already exists.'))       
    })

    afterAll(async () => {
        await DeveloperModel.destroy({
            where : {
                name : developer.name
            }
        })    
    })
})