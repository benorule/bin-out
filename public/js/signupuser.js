$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const fullName=$("input#fullName")
  const unitNumber = $("input#unitNumber");
  const houseNumber = $("input#houseNumber");
  const streetName = $("input#streetName");
  const postcode = $("input#postcode");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    console.log("on signUP clicked")
    const userData = {
      fullName: fullName.val().trim(),
      unitNumber: unitNumber.val().trim(),
      houseNumber: houseNumber.val().trim(),
      streetName: streetName.val().trim(),
      postcode: postcode.val().trim()
    };
    console.log(userData)

    if (!userData.houseNumber || !userData.streetName || !userData.postcode) {
      return;
    }
   // If we have an email and password, run the signUpUser function
   signUpUser(userData.fullName, userData.unitNumber, userData.houseNumber, userData.streetName, userData.postcode);
   fullName.val("");
    unitNumber.val("");
    houseNumber.val("");
    streetName.val("");
    postcode.val("")
  });

  // Does a post to the signup route. If successful, we are redirected to the user login page
  // Otherwise we log any errors
  function signUpUser(fullName,unitNumber, houseNumber,streetName,postcode) {
    console.log("inside signup user")
    $.post("/api/user/signup", {
      fullName:fullName,
      unitNumber: unitNumber,
      houseNumber: houseNumber,
      streetName: streetName,
      postcode: postcode,
    })
      .then(() => {
        console.log("after .then")
         window.location.replace("/userdashboard");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
