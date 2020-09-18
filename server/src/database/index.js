import Sequelize from 'sequelize'
import Funcionario from '../App/models/Funcionario'
import Cargo from '../App/models/Cargo'
import databaseConfig from '../config/database'

const models = [Funcionario,Cargo]

class Database {
    constructor(){
        this.init()
    }
    init(){
        this.connection = new Sequelize(databaseConfig)
        models.map(model=> model.init(this.connection))
    }
}


export default new Database