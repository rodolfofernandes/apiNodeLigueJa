import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { GetDeveloperIdController } from "./GetDeveloperIdController"
import { GetDeveloperIdUseCase } from "./GetDeveloperIdUseCase"

const mySqlDevelopersRepository = new MySqlDevelopersRepository

const getDeveloperIdUseCase = new GetDeveloperIdUseCase (
    mySqlDevelopersRepository
)

const getDeveloperIdController = new GetDeveloperIdController(
    getDeveloperIdUseCase
)

export {getDeveloperIdController, getDeveloperIdUseCase}