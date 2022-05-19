import { IDevelopersRepository } from "../IDevelopersRepository"
import { Developer } from "../../entities/Developer"
import { DeveloperModel } from "../../database/models/DeveloperModel"
import { Op } from "sequelize"

export class MySqlDevelopersRepository implements IDevelopersRepository {

  async findByName(name: string): Promise<any> {      
    const found = DeveloperModel.findOne({
      where: {
        name: name
      }
    })    
    
    if (found) {
      return found
    }
    return false
  }

  async save(developer: Developer): Promise<any> {
    const newDeveloper = await DeveloperModel.create({
      id: developer.id,
      name: developer.name,
      sex: developer.sex, 
      age: developer.age,
      hobby: developer.hobby,
      birthdate: new Date(developer.birthdate).toISOString().slice(0, 19).replace('T', ' ')
    })      

    return newDeveloper 

  }

  async findById(id:string):Promise<any> {   
    const found = DeveloperModel.findOne({
      where: {
        id: id
      }
    })    
    
    if (found) {
      return found
    }
    return false
  }

  async findAll():Promise<any> {
    return DeveloperModel.findAll()
  }

  async update(developer: Developer): Promise<any> {
    const update = await DeveloperModel.update(developer,{ 
      where: {
        id: developer.id
      }
    })
    return update
  }

  async delete(id: string): Promise<number> {
    return await DeveloperModel.destroy({
      where: {
        id: id
      }
    }) 
  }

  async deleteByName(name: string): Promise<void> {
    await DeveloperModel.destroy({
      where: {
        name: name
      }
    }) 
  }

 async filter (params: any): Promise<any> {

    const queryParams = {
      name : params.name ? {[Op.like]: `%${params.name}%`} : null,
      sex : params.sex ? params.sex : null,
      age : params.age ? params.age : null,
      hobby : params.hobby ? params.hobby : null,
      birthdate : params.birthdate ? params.birthdate : null,    
    }

    Object.keys(queryParams).forEach(key => {
      if (queryParams[key] === null ) {
        delete queryParams[key]
      }
    })

    return await DeveloperModel.findAndCountAll({
      where: 
        queryParams,   
        limit : 5,
        offset: params.page ? params.page * 5 : 0,
        order: [
          ['createdAt', 'DESC']
        ]
    })
 }
   
}