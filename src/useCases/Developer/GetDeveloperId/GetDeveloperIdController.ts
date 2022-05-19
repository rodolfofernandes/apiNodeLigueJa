import { Request, Response } from "express"
import { GetDeveloperIdUseCase } from "./GetDeveloperIdUseCase"

export class GetDeveloperIdController { 
    constructor (
        private getDeveloperIdUseCase: GetDeveloperIdUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
       const {id} = request.params

        try {
            const developer = await this.getDeveloperIdUseCase.execute({ id })
           return response.status(200).json(developer)

        }catch(err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}