import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { UpdateDeveloperController } from "./UpdateDeveloperController"
import { UpdateDeveloperUseCase } from "./UpdateDeveloperUseCase"

const mySqlDevelopersRepository = new MySqlDevelopersRepository()

const updateDeveloperUseCase = new UpdateDeveloperUseCase(
    mySqlDevelopersRepository
)

const updateDeveloperController = new UpdateDeveloperController(
    updateDeveloperUseCase
)

export {updateDeveloperController, updateDeveloperUseCase}
