import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { GetDeveloperController } from "./GetDeveloperController"
import { GetDeveloperUseCase } from "./GetDeveloperUseCase"

const mySqlDevelopersRepository = new MySqlDevelopersRepository()

const getDeveloperUseCase = new GetDeveloperUseCase(
    mySqlDevelopersRepository
)

const getDeveloperController = new GetDeveloperController(
    getDeveloperUseCase
)

export {getDeveloperController, getDeveloperUseCase}