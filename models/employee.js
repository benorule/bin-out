// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our employee model
module.exports = function (sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
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
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    approvedEmployee: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  // Creating a custom method for our Employee model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Employee.prototype.validPassword = function(password) {
    
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Employee.addHook("beforeCreate", employee => {
    employee.password = bcrypt.hashSync(
      employee.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  Employee.associate = function (models) {
    Employee.hasMany(models.BinRequest, {
      onDelete: "cascade"
    });
    
  };

  return Employee;
};
