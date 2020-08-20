// Creating our employee model
module.exports = function(sequelize, DataTypes) {
  const Employee = sequelize.define("Employee", {
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
    },
    address: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    postcode: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    //FUTURE CONSIDERATION
    // proofOfId: {
    //   type: DataTypes.IMAGE,
    //   notNull: true
    // },
    acceptRequest: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    requestCompleted: {
      type: DataTypes.BOOLEAN,
      default: false
    },
    employeeCustomerId: {
      //add foreign key
      type: DataTypes.INTEGER,
      notNull: true
    },
    employeeAdminId: {
      //add foreign key
      type: DataTypes.INTEGER,
      notNull: true
    }
  });

  return Employee;
};
