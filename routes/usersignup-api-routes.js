// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function (app) {
  
  app.post("/api/user/signup", (req, res) => {
    console.log(req.body)
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

  app.delete("/api/user/delete/:id", (req, res) => {
    console.log("inside user delete request");

    console.log(req.params.id)
    db.User.destroy({
      where:{
        id:req.params.id
      }
    }).then(function(results){
     
    })
    
  });

};





