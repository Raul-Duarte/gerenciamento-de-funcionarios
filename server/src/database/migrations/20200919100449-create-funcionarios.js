'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      cargo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {model:'cargos', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',

      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      }, 
      salary: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('funcionarios');
  }
};
