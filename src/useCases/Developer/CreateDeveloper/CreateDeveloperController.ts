import { Request, Response } from "express"
import { CreateDeveloperUseCase } from "./CreateDeveloperUseCase"

export class CreateDeveloperController {
  constructor(
    private createDeveloperUseCase: CreateDeveloperUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, sex, age, hobby, birthdate } = request.body

    try {
      await this.createDeveloperUseCase.execute({
        name,
        sex,
        age,
        hobby,
        birthdate
      })
  
      return response.status(201).send()  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}