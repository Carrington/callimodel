'use strict';

function ContentsModel (sequelize, DataTypes) {
  return sequelize.define('Contents', {
    contentId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    contentData: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
}
