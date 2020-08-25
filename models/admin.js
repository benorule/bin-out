const bcrypt = require("bcryptjs");
// Creating our Admin model
module.exports = function(sequelize, DataTypes) {
  const Admin = sequelize.define("Admin",
  {
   
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

  // Creating a custom method for our Admin model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Admin.prototype.validPassword = function(password) {
    
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a Admin is created, we will automatically hash their password
  Admin.addHook("beforeCreate", admin => {
    console.log("inside admin password add hook")
    admin.password = bcrypt.hashSync(
      admin.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  return Admin;
};
