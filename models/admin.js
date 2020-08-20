// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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
  Admin.associate = function(models) {
    Admin.hasMany(models.User, {
      //onDelete:"cascade"
    });
    Admin.hasMany(models.Employee, {
      //onDelete:"cascade"
    });
  };

  return Admin;
};
