// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/employee/login", passport.authenticate("local"), (req, res) => {
      console.log("test");
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });


  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


  //Need to work here
  // Route for getting all the request from user to emplyee front end
  //Join table and send informatin User fullName, unitNumber houseNumber,streetName, postcode only if approvedUser is true and Binrequest table has date and UserId
  app.get("/api/user/binrequest", (req, res) => {

    console.log("inside bin request api back")
    db.BinRequest.findAll({
      attributes: ['UserId'],
      where: {
        //  date: {
        //  [Op.ne]: ''
        //  },
        completed: 0
      }
    })
      .then((result) => {
        result.forEach(element => {
          db.User.findAll({
            attributes: ['id', 'fullName', 'unitNumber', 'houseNumber', 'streetName', 'postcode'],
            where: {
              id: element.dataValues.UserId
            }
          })
            .then((response) => {
              var result2 = [];
              response.forEach(element => {
                result2.push(element.dataValues);
              });
              console.log(result2);
              res.json(result2);
            });
        });
      });
  });

  app.put("/api/:EmployeeId/binrequest/accepted/:id", (req, res) => {
    db.BinRequest.update({
      EmployeeId: req.params.EmployeeId
    },
      {
        where: {
          UserId: req.params.id
        }
      }).then((data) => {
        res.json(data);

      });
  });

  app.put("/api/employee/binrequest/completed/:id", (req, res) => {
    db.BinRequest.update({
      completed: 1
    },
      {
        where: {
          UserId: req.params.id
        }
      }).then((data) => {
        res.json(data);

      });
   });
}
