import {Router} from 'express';

// import Funcionario from './App/models/Funcionario'
import FuncionarioController from './App/controllers/FuncionarioController'
import CargoController from './App/controllers/CargoController'

const routes = new Router()

routes.post('/funcionario',FuncionarioController.store)
routes.put('/funcionario/:id',FuncionarioController.update)

// routes.post('/cargo',CargoController.store)

export default routes;