
import request from "supertest"
import { app } from "../../../../app"
import { DeveloperModel } from "../../../../database/models/DeveloperModel"

describe('Create developer Controller', () => {
  
    const developer = {
        name : "New Controller developer",
        sex: "M",
        age: 30,
        hobby: 'basquete',
        birthdate: new Date('1992/02/22')
    }

    it('Showd be able to create a developer from Controller', async () => {
        const response = await request(app). post("/developers").send(developer)   
        
        expect(response.status).toBe(201)       

    })   

    it("Should not be able to create a developer from Controller",async () => {

        await request(app). post("/developers").send(developer)   
        
        const responseNot = await request(app). post("/developers").send(developer)

        expect(responseNot.status).toBe(400)

    })

    afterAll ( async ()=> {
        await DeveloperModel.destroy({
            where : {
                name : developer.name
            }
        })
    })
})