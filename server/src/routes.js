import {Router} from 'express';
import cors from 'cors'

// import Funcionario from './App/models/Funcionario'
import FuncionarioController from './App/controllers/FuncionarioController'
import CargoController from './App/controllers/CargoController'

const routes = new Router()

routes.post('/funcionario',cors(),FuncionarioController.store)
routes.put('/funcionario/:id',cors(),FuncionarioController.update)
routes.get('/funcionario',cors(),FuncionarioController.get)

// routes.post('/cargo',CargoController.store)

export default routes;