import Sequelize from 'sequelize'
import Funcionario from '../App/models/Funcionario'
import Cargo from '../App/models/Cargo'
import databaseConfig from '../config/database'

const connection = new Sequelize(databaseConfig)

Cargo.init(connection)
Funcionario.init(connection)

Funcionario.associate(connection.models)


module.exports = connection