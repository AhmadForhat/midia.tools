module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
          },
          name:{
            type: DataTypes.STRING,
            allowNull: false
          },
          email:{
            type: DataTypes.STRING,
            allowNull: false
          },
          password: DataTypes.STRING,          
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
      },
      {
        timestamps: false,
      }
    );
    
    return User;
  };
  