import { Request,Response } from "express"
import { GetDeveloperUseCase } from "./GetDeveloperUseCase"

export class GetDeveloperController {
    constructor(
      private getDeveloperUseCase: GetDeveloperUseCase
    ){}

    async handle(request: Request,response: Response): Promise<Response> {
        try {
            const developers = await this.getDeveloperUseCase.execute()
         
            response.status(200).json(
                {
                    developers,
                    message: "Developers List"
                })
        } catch(err){
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
              })
        }
    }
}