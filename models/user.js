// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
//const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unitNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    houseNumber: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    streetName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    approvedUser: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.BinRequest, {
      onDelete: "cascade"
    });

    // User.belongsTo(models.Admin, {
    //   foreignKey: {
    //     allowNull: true,
    //     defaultValue: 0
    //   }
    // });
  };
  return User;
};
