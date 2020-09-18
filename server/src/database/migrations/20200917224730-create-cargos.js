'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cargos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

      },
      funcionario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {model:'funcionarios', key:'id'},
        onUpdate:'CASCADE',
        onDelete:'CASCADE',

      },
      name: {
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('cargos');
  }
};
