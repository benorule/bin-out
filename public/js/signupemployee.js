$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const fullName = $("input#fullName");
  const email = $("input#email");
  const password = $("input#password");
  const address = $("input#address");
  const postcode = $("input#postcode");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      fullName: fullName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      address: address.val().trim(),
      postcode: postcode.val().trim()
    };

    if (!userData.fullName || !userData.email || !userData.password || !userData.address || !userData.postcode) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpEmployee(userData.fullName, userData.email, userData.password, userData.address, userData.postcode);
    fullName.val("");
    email.val("");
    password.val("");
    address.val("");
    postcode.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpEmployee(fullname,email,password,address,postcode) {
    console.log("inside signupemployee")
    $.post("/api/employee/signup", {
      fullName: fullname,
      email: email,
      password: password,
      address: address,
      postcode: postcode,
     
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
