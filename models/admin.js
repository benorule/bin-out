// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const Admin = sequelize.define("Admin", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      //unique?
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Admin;
};
