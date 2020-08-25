// Requiring our models and passport as we've configured it
const db = require("../models");
const path = require("path")
const moment = require("moment")


module.exports = function (app) {

  app.post("/api/user/bin/request", (req, res) => {
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

      } else{
        console.log("User not registered")
        res.send("User is registerd but not approved yet")
      }
    }).catch(err=>{
      console.log("line 32");
      console.log(err);
     // res.status(401).json(err);
      res.send("User not registerd please signup first no matching unique Id found")
    })
  });

 

};





