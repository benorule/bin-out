// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("Admin", {
    fullName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      //unique?
      type: DataTypes.STRING,
      notEmpty: true,
      validate: {
        isEmail: true
      },
      unique: {
        args: true,
        msg: "Email address already in use!"
      }
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: true
    }
  });

  return User;
};
