// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function (app) {

  app.post("/api/bin/request", (req, res) => {
    db.User.findOne({
      where: {
        id: req.body.userId
      }
    }).then(function (result) {
      console.log(result.dataValues.approvedUser)
      if (result.dataValues.approvedUser === true) {
        db.BinRequest.create({
          date: req.body.date,
          UserId: req.body.userId
        }).then(function (result) {
          console.log(result)
          res.send("Your request has been placed waiting to confirm")
        })

      } else {
        console.log("User not registered")
        res.send("User is registerd but not approved yet")
      }
    }).catch(err => {
      console.log("line 32");
      console.log(err);
      // res.status(401).json(err);
      res.send("User not registerd please signup first no matching unique Id found")
    })
  });


  //Need to work here
  // Route for getting all the request from user to emplyee front end
  //Join table and send informatin User fullName, unitNumber houseNumber,streetName, postcode only if approvedUser is true and Binrequest table has date and UserId
  app.get("/api/update/binrequest", (req, res) => {

    console.log("inside bin request api back")
    db.BinRequest.findAll({
      attributes: ['UserId'],
      where: {
        completed: false
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
              console.log("inside line 56")
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
        res.send("Your request has been accepted and bin will be collected on specified date")
        // res.json(data);

      }).catch((err) => {
        res.send("Something went wrong try again later")
      })
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
        res.send("Your bin out request has been completed")
        // res.json(data);

      }).catch((err) => {
        res.send("Something went wrong try again later")
      })
  });



};





