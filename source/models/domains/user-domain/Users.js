'use strict';

function UsersModel (sequelize, DataTypes) {
  return sequelize.define('Users', {
    username: {
      type: DataTypes.STRING(128),
      allowNull: false,
      primaryKey: true
    },
    salt: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    hash: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
}

export default UserModel;
