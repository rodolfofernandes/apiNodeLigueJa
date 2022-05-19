import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { DeleteDeveloperController } from "./DeleteDeveloperController"
import { DeleteDeveloperUseCase } from "./DeleteDeveloperUseCase"

const mySqlDevelopersRepository = new MySqlDevelopersRepository()

const deleteDeveloperUserCase = new DeleteDeveloperUseCase(
    mySqlDevelopersRepository
)

const deleteDeveloperController = new DeleteDeveloperController(
    deleteDeveloperUserCase
)

export {deleteDeveloperUserCase, deleteDeveloperController}