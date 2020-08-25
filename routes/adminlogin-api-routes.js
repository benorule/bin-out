// Requiring our models and passport as we've configured it
const passportAdmin = require("../config/passportAdmin");

module.exports = function (app) {
  // Using the passportAdmin.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error

  app.post("/api/admin/dashboard", passportAdmin.authenticate("local"), (req, res) => {
    console.log("inside line 19 admin login")
    console.log(req.body)

    // Sending back a password, even a hashed password, isn't a good idea
    // res.json({
    //   email: req.user.email,
    //   id: req.user.id
    // });
    res.redirect("/admin/dashboard")

  });
  
};


//Admin signup API can be used in future
// app.post("/api/admin/signup",(req, res) => {

//  db.Admin.create({
//    fullName:"Test",
//   email: "test@binout.com",
//   password:"test1234"
//  }).then((result) => {
//      console.log("after admin created")
//   res.redirect("/admin/dashboard")
// })
// .catch(err => {
//   console.log("after admin created error")
//   console.log(err)
//   res.status(401).json(err);
// });
// });
