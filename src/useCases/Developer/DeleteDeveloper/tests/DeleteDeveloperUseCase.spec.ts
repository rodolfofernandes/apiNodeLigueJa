import { deleteDeveloperUserCase } from ".."
import { DeveloperModel } from "../../../../database/models/DeveloperModel"
 

describe('Delete a developer use case', () => {      
    
    const developer = {
        id: '8af9af46-50d1-486e-a8c9-d3271568aea3',
        name : "Delete Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }
  
    it('Should be able to delete a developer by id', async () => {

        await DeveloperModel.create(developer)
        
        const testeDeleteDeveloper = await deleteDeveloperUserCase.execute({ id: developer.id })

        expect(testeDeleteDeveloper).toBeGreaterThanOrEqual(1)
    })

    it('Should not be able to delete a developer by id', async () => {

        await expect(deleteDeveloperUserCase.execute({ id: developer.id }))
        .rejects
        .toEqual(new Error('Developer not exists'))
    })
})