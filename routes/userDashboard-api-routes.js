// Requiring our models and passport as we've configured it
const db = require("../models");
const path = require("path")


module.exports = function (app) {
  
    app.post("/api/user/binOutRequest", (req, res) => {

        console.log("inside user binout request")
        console.log(res.body.requestDate);
        console.log(res.body.userUniqueId);
    
      });

};





