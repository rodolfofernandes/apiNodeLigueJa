import { DeveloperModel } from "../../../../database/models/DeveloperModel"
import { uuid } from "uuidv4"
import request from "supertest"
import { app } from "../../../../app"

describe('Filter Developer Controller', () => {
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

    it('Should be able to filter Developers Controller', async () => {
    
        const response = await request(app).get('/developers/filter/?age=30').send()

        expect(response.status).toBe(200)
         
    })

    it('Should not be able to filter developers from Controller', async () => {
        const responseNot = await request(app).get('/developers/filter/').send()
    
        expect(responseNot.status).toBe(400)
    })

    afterAll(async () => {
        DeveloperModel.destroy({
            where: {name: ['New Developer 1', 'New Developer 1']}
        })
    })
    
})