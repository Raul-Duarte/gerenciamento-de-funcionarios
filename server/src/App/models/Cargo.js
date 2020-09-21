import Sequelize, { Model } from 'sequelize'
class Cargo extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            
        },{
            sequelize
        })
    }
    static associate(models){
        this.hasMany(models.Funcionario,{foreignKey:'cargo_id', as:'cargos'})
    }
}

export default Cargo