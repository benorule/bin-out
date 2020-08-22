// Requiring our models and passport as we've configured it
const db = require("../models");
const fs = require("fs")
const path = require("path")

// var newhbsObj = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))

module.exports = function (app) {
  // app.post("/api/user/signup", (req, res) => {
  //   var hbsObj = {
  //     userid: req.body.userid,
  //     fullName: req.body.fullName,
  //     unitNumber: parseInt(req.body.unitNumber),
  //     houseNumber: parseInt(req.body.houseNumber),
  //     streetName: req.body.streetName,
  //     postcode: parseInt(req.body.postcode)
  //   }
  //   newhbsObj.users.push(JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8")));
  //   fs.writeFileSync("./db/db.json", JSON.stringify(newhbsObj));
  // });
  // app.get("/api/users", (req, res) => {
  //   db.User.findAll().then(function (result) {
  //     res.render("users", result);
  //   })
  // });

  app.post("/api/insert/userrequest", (req, res) => {
    const userData = {
      fullName: req.body.fullName,
      unitNumber: parseInt(req.body.unitNumber),
      houseNumber: parseInt(req.body.houseNumber),
      streetName: req.body.streetName,
      postcode: parseInt(req.body.postcode)
    };
    db.User.create(userData).then((result) => {})
      .catch(err => {
        console.log(err);
        res.status(401).json(err);
      });
  });

  app.delete("/api/delete/userrequest", (req, res) => {
    console.log("inside delete request");
  });

};





