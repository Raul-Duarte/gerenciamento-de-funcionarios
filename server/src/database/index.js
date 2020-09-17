import Sequelize from 'sequelize'
import Funcionario from '../App/models/Funcionario'
import databaseConfig from '../config/database'

const models = [Funcionario]

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