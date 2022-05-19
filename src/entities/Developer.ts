import { uuid } from 'uuidv4'

export class Developer {
   
  public readonly id: string

  public name: string
  public sex: string
  public age: number
  public hobby: string
  public birthdate: Date

  constructor(props: Omit<Developer, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}