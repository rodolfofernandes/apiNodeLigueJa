import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"
import { CreateDeveloperController } from "./CreateDeveloperController"

const mySqlDevelopersRepository = new MySqlDevelopersRepository()

const createDeveloperUseCase = new CreateDeveloperUseCase(
  mySqlDevelopersRepository 
)

const createDeveloperController = new CreateDeveloperController(
  createDeveloperUseCase
)

export { createDeveloperUseCase, createDeveloperController }