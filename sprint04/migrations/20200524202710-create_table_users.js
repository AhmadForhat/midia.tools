'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('users', {
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name:{
      type: Sequelize.STRING,
      allowNull: false
    },
    email:{
      type: Sequelize.STRING,
      allowNull: false
    },
    password:{
      type: Sequelize.STRING,
      allowNull: false
    },    
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('users')
  }
};
