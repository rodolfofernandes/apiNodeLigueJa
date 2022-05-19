
import request from "supertest"
import { app } from "../../../../app"
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Delete developer Controller', () => {
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

    it('Should be able to update a developer from Controller', async () => {

        const response = await request(app). put(`/developers/${developer.id}`).send({
            name : "updated Developer Controller",
            sex : 'F',
            age: 20,
            hobby: 'tamboreu',
            birthdate: new Date('1990/05/20')
        })
        
        expect(response.status).toBe(204)

        await DeveloperModel.destroy({
            where : {
                id : developer.id
            }
        })
    })
    
    it('Should not be able to update', async () => {
        const responseNot = await request(app). put(`/developers/${developer.id}`).send({
            name : "updated Developer Controller",
            sex : 'F',
            age: 20,
            hobby: 'tamboreu',
            birthdate: new Date('1990/05/20')
        })
        expect(responseNot.status).toBe(400)
    })
}) 