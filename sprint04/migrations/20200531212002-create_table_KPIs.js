'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('KPIs', {
        id_socialMedia:{
          type: DataTypes.VARCHAR
        },
        array: {
          type: Datatypes.STRING
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('KPIs');
  }
};
