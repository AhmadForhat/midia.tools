'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('company', {
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
        company_name:{
          type: DataTypes.STRING
        },
        email:{
          type: DataTypes.STRING,
          allowNull:false
        },
        password:{
          type: DataTypes.STRING,
          allowNull:false
        }
       });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('company');

  }
};
