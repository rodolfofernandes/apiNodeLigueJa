import { DeveloperModel } from "../../../../database/models/DeveloperModel"
import request from "supertest"
import { app } from "../../../../app"
import { uuid } from "uuidv4"

describe('Get developers from Controller', () => {
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
        name : "New Developer 1 ",
        sex: "M",
        age: 30,
        hobby: 'Soccer',
        birthdate: new Date('1992/02/22')
    }

    beforeAll(async () => {
        await DeveloperModel.create(developer)
        await DeveloperModel.create(developer_1)
    })
    
    it('Should get developers from Controller', async () => {

        const response = await request(app).get('/developers').send()

        expect(response.status).toBe(200)

        await DeveloperModel.destroy({
            where: {
                name: ['New Developer 1', 'New Developer']           
            }            
        })
    })

    it('Should not be able to get all developers from Controller', async () => {
        const responseNot = await request(app).get('/developers').send()
    
        expect(responseNot.status).toBe(400)
    })
})