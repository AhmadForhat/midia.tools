'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('users_has_agendamento', {
        users_id:{
          type: DataTypes.INTEGER
        },
        agendamento_id:{
          type: DataTypes.INTEGER
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('users_has_agendamento');
  }
};
