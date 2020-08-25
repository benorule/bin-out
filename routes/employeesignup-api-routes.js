// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function (app) {
  app.post("/api/employee/signup", (req, res) => {
    console.log(req.body)
   
    const employeeData={
      fullName: req.body.fullName,
      email: req.body.email,
      password:req.body.password,
      address: req.body.address,
      postcode: parseInt(req.body.postcode)

    };
      db.Employee.create(employeeData).then((result) => {
        res.send("Employee Created Successfully")
      })
      .catch(err => {
        res.send("Something went wrong try again later")
       // res.status(401).json(err);
      });
    

  });


  // PUT route for updating Employee
  app.put("/api/employee/update/approved/:id", function(req, res) {
    // Add code here to update a post using the values in req.body, where the id is equal to
    // req.body.id and return the result to the user using res.json
    db.Employee.update(
      {approvedEmployee:true
     
    },{
      where:{
        id:req.params.id
      }
    }).then(function(result){
      
     
    })
  })

  app.delete("/api/employee/delete/:id", (req, res) => {
    console.log("inside employee delete request");

    console.log(req.params.id)
    db.Employee.destroy({
      where:{
        id:req.params.id
      }
    }).then(function(results){
     
    })
    
  });
};





