import { Request, Response } from "express"
import { FilterDeveloperUseCase } from "./FilterDeveloperUseCase"

export class FilterDeveloperController {
    constructor(
        private filterDeveloperUseCase : FilterDeveloperUseCase
    ){}

    async handle(request: Request, response: Response ) : Promise<Response> {
        try {
            const queryParams = request.query            
            const developers = await this.filterDeveloperUseCase.execute(queryParams)

            return response.status(200).json({
                developers,
                message: "Developers List"
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected Error'
            })
        }        
    }
}