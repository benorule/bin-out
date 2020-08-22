// Requiring our models and passport as we've configured it
const db = require("../models");
const fs = require("fs")
const path = require("path")


var newhbsObj = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))

module.exports = function (app) {
  app.post("/api/user/signup", (req, res) => {
var hbsObj={
    userid:req.body.userid,
    fullName : req.body.fullName,
    unitNumber : parseInt(req.body.unitNumber),
    houseNumber : parseInt(req.body.houseNumber),
    streetName : req.body.streetName,
    postcode : parseInt(req.body.postcode)
    }
   let oldData =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
   oldData.push(hbsObj)
   fs.writeFileSync("./db/db.json", JSON.stringify(oldData))

  });

  

  app.get("/adminDashboard", (req, res) => {
  
    res.render("index", newhbsObj);
  });


  app.post("/api/insert/userrequest", (req, res) => {
    console.log("inside insert  request")

    console.log(newhbsObj.fullName)

    db.Employee.create({
      fullName: newhbsObj.fullName,
      unitNumber: newhbsObj.unitNumber,
      houseNumber: newhbsObj.houseNumber,
      streetName: newhbsObj.streetName,
      postcode: newhbsObj.postcode
    }).then(() => {
      console.log("line 57")
      res.redirect("/adminDashboard");
    })
      .catch(err => {
        console.log("line 49")
        res.status(401).json(err);
      });

  });

  app.delete("/api/delete/userrequest", (req, res) => {
    console.log("inside delete request")
  });

};





