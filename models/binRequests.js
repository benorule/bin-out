// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const BinRequest = sequelize.define("BinRequest", {
    date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  });
  BinRequest.associate = function(models) {
    BinRequest.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    BinRequest.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return BinRequest;
};
