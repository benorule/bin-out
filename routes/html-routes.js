// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/userdashboard");
    }
    res.sendFile(path.join(__dirname, "../public/signupuser.html"));
  });

  app.get("/employee", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/signupemployee.html"));
  });

  app.get("/userdashboard", (req, res) => {

    res.sendFile(path.join(__dirname, "../public/userdashboard.html"));
  });

  app.get("/admin/dashboard", (req, res) => {
    res.redirect("/admin/users");
  });

  app.get("/admin/users", (req, res) => {
    db.User.findAll().then(function (result) {
      var newResult = {
        user: result
      }
      res.render("users", newResult);
    })
  });

  app.get("/admin/employees", (req, res) => {
    res.render("employees");
  });

};
