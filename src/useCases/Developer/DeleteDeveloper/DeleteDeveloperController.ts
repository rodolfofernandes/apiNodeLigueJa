import { Request, Response } from "express"
import { DeleteDeveloperUseCase } from "./DeleteDeveloperUseCase"

export class DeleteDeveloperController {
    constructor(
        private deleteDeveloperUserCase: DeleteDeveloperUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            await this.deleteDeveloperUserCase.execute({id:id})
            return response.status(204).send() 
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
              })
        }
    }
}