import Sequelize, { Model } from 'sequelize'

class Cargo extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            
        },{
            sequelize
        })
    }
}

export default Cargo