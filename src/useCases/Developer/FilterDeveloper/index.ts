import { MySqlDevelopersRepository } from "../../../repositories/implementations/MySqlDevelopersRepository"
import { FilterDeveloperController } from "./FilterDeveloperController"
import { FilterDeveloperUseCase } from "./FilterDeveloperUseCase"

const mySqlDevelopersRepository = new MySqlDevelopersRepository()

const filterDeveloperUseCase = new FilterDeveloperUseCase(
    mySqlDevelopersRepository
)

const filterDeveloperController = new FilterDeveloperController(
    filterDeveloperUseCase
)

export { filterDeveloperController, filterDeveloperUseCase }