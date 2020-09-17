import Sequelize, { Model } from 'sequelize'

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
        },{
            sequelize
        })
    }
}

export default Funcionario