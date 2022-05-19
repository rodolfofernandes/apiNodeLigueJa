
import request from "supertest"
import { app } from "../../../../app"
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Get developer id controller', () => {
    const developer = {
        id: '8af9af46-50d1-486e-a8c9-d3271568aea3',
        name : "Delete Developer",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    it('Should be able to get a developer by Id', async () => {
        await DeveloperModel.create(developer)

        const response = await request(app). get(`/developers/${developer.id}`).send()

        expect(response.status).toBe(200)

        DeveloperModel.destroy({
            where: {
                name : developer.name
            }
        })
    })

    it('Should not be able to get developer by id', async () => {
        const responseNot = await request(app). get(`/developers/${developer.id}`).send()
        expect(responseNot.status).toBe(400)
    })

})