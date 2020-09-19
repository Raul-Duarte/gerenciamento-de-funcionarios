import Sequelize, { Model } from 'sequelize'

class Funcionario extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            surname: Sequelize.STRING,
            date: Sequelize.DATE,
            salary: Sequelize.DOUBLE,
        },{
            sequelize
        })
    }
    static associate(models){
        this.belongsTo(models.Cargo,{foreignKey:'cargo_id', as:'cargo'})
    }
}

export default Funcionario