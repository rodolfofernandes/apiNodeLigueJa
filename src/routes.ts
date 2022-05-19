import { response, Router } from "express"
import { createDeveloperController } from "./useCases/Developer/CreateDeveloper"
import { deleteDeveloperController } from "./useCases/Developer/DeleteDeveloper"
import { filterDeveloperController } from "./useCases/Developer/FilterDeveloper"
import { getDeveloperController } from "./useCases/Developer/GetDevelopers"
import { getDeveloperIdController } from "./useCases/Developer/GetDeveloperId"
import { updateDeveloperController } from "./useCases/Developer/UpdateDeveloper"

const router = Router()

router.post('/developers', (request, response) => { 
  return createDeveloperController.handle(request, response)
})

router.get('/developers',(request, response) => {
  return getDeveloperController.handle(request, response)
})

router.get('/developers/filter/', (request, response) => {
  return filterDeveloperController.handle(request, response)
})

router.get('/developers/:id',(request,response) => {
  return getDeveloperIdController.handle(request,response)
})

router.put('/developers/:id',(request, response) =>{
  return updateDeveloperController.handle(request, response)
})

router.delete('/developers/:id',(request, response) =>{
  return deleteDeveloperController.handle(request, response)
})

export { router }