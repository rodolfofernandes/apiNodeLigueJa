
import request from "supertest"
import { app } from "../../../../app"
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Delete developer Controller', () => {
    const developer = {
        id: '8af9af46-50d1-486e-a8c9-d3271568aea3',
        name : "Delete Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    it('Should be able to delete a developer from Controller', async () => {

        await DeveloperModel.create(developer)

        const response = await request(app). delete(`/developers/${developer.id}`).send()
        
        expect(response.status).toBe(204)
    })
    
    it('Should not be able to delete', async () => {
        const responseNot = await request(app). delete(`/developers/${developer.id}`).send()
        expect(responseNot.status).toBe(400)
    })
}) 