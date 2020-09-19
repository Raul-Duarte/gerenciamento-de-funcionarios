import {Router} from 'express';
import cors from 'cors'

// import Funcionario from './App/models/Funcionario'
import FuncionarioController from './App/controllers/FuncionarioController'
import CargoController from './App/controllers/CargoController'


const routes = new Router()
routes.use((req,res,next)=>{
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods",'GET,PUT,POST,DELETE')
  routes.use(cors())
  next()
})
routes.post('/funcionario',FuncionarioController.store)
routes.put('/funcionario/:id',FuncionarioController.update)
routes.get('/funcionario',FuncionarioController.get)

// routes.post('/cargo',CargoController.store)

export default routes;