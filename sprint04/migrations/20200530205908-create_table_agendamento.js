'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('agendamento', {
        id:{
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement:true
        },
        id_socialMedia:{
          type: DataTypes.VARCHAR
        },
        create_timestamp:{
          type: DataTypes.TIMESTAMP
        },
        publish_date_time:{
          type: DataTypes.DATE
        },
        social_media:{
          type: DataTypes.STRING,
          allowNull: false
        },
        conteudo_img:{
          type: DataTypes.STRING
        },
        conteudo_texto:{
          type: DataTypes.STRING
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('agendamento');
  }
};
