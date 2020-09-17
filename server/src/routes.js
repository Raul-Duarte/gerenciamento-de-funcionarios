import {Router} from 'express';

// import Funcionario from './App/models/Funcionario'
import FuncionarioController from './App/controllers/FuncionarioController'
const routes = new Router()

routes.post('/funcionario',FuncionarioController.store)
routes.put('/funcionario/:id',FuncionarioController.update)

export default routes;