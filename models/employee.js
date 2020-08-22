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
      allowNull: true
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });

  Employee.associate = function (models) {
    Employee.hasMany(models.BinRequest, {
      onDelete: "cascade"
    });
    
  };

  return Employee;
};
