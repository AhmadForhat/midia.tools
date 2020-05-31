'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('agendamento_has_KPIs', {
        agendamento_id:{
          type: DataTypes.INTEGER
        },
        KPIs_id_socialMedia:{
          type: DataTypes.VARCHAR
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('agendamento_has_KPIs');
  }
};
