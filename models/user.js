// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
//const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    unitNumber: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    houseNumber: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    streetName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    postcode: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    proofOfAddress: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    uniqueCustomerId: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    request: {
      type: DataTypes.STRING,
      //??
      notNull: true,
      default: false
    },
    customerId: {
      type: DataTypes.INTEGER,
      notNull: true
    }
  });

  // User.associate = function(models) {
  //   User.belongsTo(models.XXX, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //};
  return User;
};
