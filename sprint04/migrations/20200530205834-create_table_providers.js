'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('providers', {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true
        },
        create_time:{
          type: DataTypes.TIMESTAMP
        },
        cpnj:{
          type: DataTypes.INTEGER,
          allowNull:false,
        },
        username:{
          type: DataTypes.STRING
        },
        email:{
          type: DataTypes.STRING,
          allowNull:false
        },
        password:{
          type: DataTypes.STRING,
          allowNull:false
        },
        users_id:{
          type: DataTypes.INTEGER,
          allowNull:false
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('providers');
  }
};
