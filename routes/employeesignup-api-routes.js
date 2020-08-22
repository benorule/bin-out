// Requiring our models and passport as we've configured it
const db = require("../models");
const fs = require("fs")
const path = require("path")


var newhbsObj = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8"))

module.exports = function (app) {
  
    app.post("/api/employee/signup", (req, res) => {
        var hbsObj = {
         employeeid:req.body.employeeid,
         employeefullName : req.body.fullName,
         email : req.body.email,
         address : req.body.address,
         employeepostcode : parseInt(req.body.postcode)
        }
       // fs.appendFileSync("./db/db.json", JSON.stringify(hbsObj))
       let oldData =JSON.parse(fs.readFileSync(path.join(__dirname,"../db/db.json"),"utf-8")) 
       oldData.push(hbsObj)
       fs.writeFileSync("./db/db.json", JSON.stringify(oldData))
    
      });


  app.post("/api/insert/employeerequest", (req, res) => {
    console.log("inside insert employee request")
   
    console.log(newhbsObj[2].employeefullName)
      console.log(newhbsObj[2].employeefullName)
      db.Employee.create({
      fullName: newhbsObj[2].employeefullName,
      email: newhbsObj[2].email,
      password:"apple",
      address: newhbsObj[2].address,
      postcode: newhbsObj[2].employeepostcode
      
    
    }).then(() => {
      console.log("line 36")
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





