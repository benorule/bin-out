// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const BinRequest = sequelize.define("BinRequest", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });
  BinRequest.associate = function(models) {
    BinRequest.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    BinRequest.belongsTo(models.Employee, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return BinRequest;
};
