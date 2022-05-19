import { Request, Response } from "express"
import { UpdateDeveloperUseCase } from "./UpdateDeveloperUseCase"

export class UpdateDeveloperController {
    constructor (
        private updateDeveloperUseCase: UpdateDeveloperUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, sex, age, hobby, birthdate } = request.body
        const { id } = request.params

        try {
            const updateDeveloper = await this.updateDeveloperUseCase.execute({               
                name,
                sex,
                age,
                hobby,
                birthdate
            }, id)
            return response.status(204).json(updateDeveloper)
        }catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}