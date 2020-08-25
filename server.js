// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");


// Requiring passport as we've configured it
const passport = require("./config/passport");
const passportAdmin=require("./config/passportAdmin")

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
//Check Employee Passport
app.use(passport.initialize());
app.use(passport.session());

//Check Admin Passport
app.use(passportAdmin.initialize());
app.use(passportAdmin.session());

//Set Handlebars
const exhpbs = require("express-handlebars");
app.engine("handlebars", exhpbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes

require("./routes/html-routes.js")(app);
require("./routes/usersignup-api-routes.js")(app);
require("./routes/employeesignup-api-routes.js")(app);
require("./routes/userrequest-api-routes.js")(app);
require("./routes/employeelogin-api-routes.js")(app);
require("./routes/adminlogin-api-routes.js")(app)


// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
