// Requiring our models and passport as we've configured it
const db = require("../models");
const path = require("path")
const moment =require("moment")


module.exports = function (app) {
  
    app.post("/api/user/bin/request", (req, res) => {

        console.log("inside user binout request")
        console.log(moment().format(req.body.date));
        console.log(typeof(req.body.date))
        console.log(req.body.userId);
        
    
      });

};





