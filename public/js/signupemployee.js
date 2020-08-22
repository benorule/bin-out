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
    const employeeData = {
      fullName: fullName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      address: address.val().trim(),
      postcode: postcode.val().trim()
    };

    if (!employeeData.fullName || !employeeData.email || !employeeData.password || !employeeData.address || !employeeData.postcode) {
      return;
    }
    // If we have an required data, run the signUpEmployee function
    signUpEmployee(employeeData);
    clearAll()
   
  });

  // Does a post to the signUpEmployee route. If successful, we are redirected to the signUpEmployee page
  // Otherwise we log any errors
  function signUpEmployee(employeeData) {
    console.log("inside signupemployee")
    $.post("/api/employee/signup",employeeData)
      .then(() => {
        window.location.replace("/employee/signup");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }

  function clearAll(){
    fullName.val("");
    email.val("");
    password.val("");
    address.val("");
    postcode.val("");
  }
});
