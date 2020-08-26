// Requiring path to so we can use relative routes to our HTML files
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  //Routes for index page up user information
  app.get("/", (req, res) => {
    res.render("index", {
      title: "Dashboard",
      heading: "We are here to take your bin out"
    })

  });

  //Routes for signing up user information
  app.get("/user/signup", (req, res) => {
    res.render("usersignup", {
      title: "Signup User",
      heading: "Signup User"
    })
  });

  //Routes for user dashboard after signup
  app.get("/user/dashboard", (req, res) => {
    res.render("userdashboard", {
      title: "User Dashboard",
      heading: "User Dashboard"
    })
  });

  //Routes for signing up employees
  app.get("/employee/signup", (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/signupemployee.html"));
    res.render("signupemployee", {
      title: "Signup Employee",
      heading: "Signup Employee"
    })
  });

  //Routes for employees login page
  app.get("/employee/login", (req, res) => {
    res.render("employeelogin", {
      title: "Employee Login",
      heading: "Employee Login"
    })
  });


  app.get("/employee/dashboard", isAuthenticated, (req, res) => {
    res.render("employeedashboard", {
      title: "Employee Dashboard",
      heading: "Employee Dashboard"
    })
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });



  //Routes for admin dashboard which will populate users table initially
  app.get("/admin/dashboard", (req, res) => {
    res.redirect("/admin/users");
  });

  //Routes to find all the users from database which will populate on the users table
  app.get("/admin/users", (req, res) => {
    db.User.findAll({
      where: {
        approvedUser: false
      }
    }).then(function (result) {

      //Creating user objects to pass to handlebars
      let newUser = {
        title: "Admin Dashboard",
        heading: "Users",
        user: result
        
      }
      res.render("users", newUser);
    })
  });


  //Routes for getting all the employees from the database and populates on employee table
  app.get("/admin/employees", (req, res) => {
    db.Employee.findAll({
      where: {
        approvedEmployee: false
      }
    }).then(function (result) {

      //Creating employee objects to pass to handlebars
      let newEmployee = {
        title: "Admin Dashboard",
        heading: "Employees",
        employee: result
      }
      res.render("employees", newEmployee);
    })

  });

};
