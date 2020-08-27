// Requiring our models and passport as we've configured it
const db = require("../models");
const Nexmo = require('nexmo')


//protect keys
const nexmo = new Nexmo({
  apiKey:process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
})

module.exports = function (app) {

  app.post("/api/user/signup", (req, res) => {
    console.log("inside signup line 7")
    console.log(req.body)
    const userData = {
      fullName: req.body.fullName,
      unitNumber: parseInt(req.body.unitNumber),
      houseNumber: parseInt(req.body.houseNumber),
      streetName: req.body.streetName,
      postcode: parseInt(req.body.postcode),
      phoneNumber: parseInt(req.body.phoneNumber)
    };

    db.User.create(userData).then((result) => {
      console.log("line 17 created uer")
      res.send("User signed up successfully wait for approve")

    })
      .catch(err => {
        console.log(err);
        res.send("Something went wrong please try again later")
        // res.status(401).json(err);
      });
  });

  app.put("/api/user/update/approved/:id", (req, res) => {
    console.log("inside user update request");

    db.User.update(
      { approvedUser: true },
      {
        where: {
          id: req.params.id
        }
      }

    ).then(function (results) {
      
      db.User.findOne({
        where: {
          id: req.params.id,
          approvedUser: true

        }
      }).then((results) => {
        console.log("line 55 after updates sending message")
      console.log(results)
        const from = 'Bin out '//NEXMO_BRAND_NAME
        const to = results.phoneNumber//'61420719901';
        const text = `Your sign up with Bin out has been approved.Please note your user id while sending your request.Your unique id is ${results.id}`
        nexmo.message.sendSms(from, to, text, (err, responseData) => {
          if (err) {
            console.log(err);
          } else {
            if (responseData.messages[0]['status'] === "0") {
              console.log("Message sent successfully.");
              res.send("User has been approved ready to send request")
            } else {
              console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
          }
        })
      })

    }).catch(err => {
      console.log("err")
      res.send("Something went wrong try again later!!")
    })

  });

  app.delete("/api/user/delete/:id", (req, res) => {
    console.log("inside user delete request");
    console.log(req.params.id)
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (results) {
      res.send("User did not full fill criteria removed from list")
    }).catch(err => {
      console.log(err)
      res.send("Something went wrong try again later!!")
    })

  });

};










