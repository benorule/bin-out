$(document).ready(() => {

  // Getting references to our form and inputs
  const loginForm = $("form.employeelogin");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  loginForm.on("submit", (event) => {
    event.preventDefault();
    console.log("on employee login button clicked")
    
    const employeeData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    }

    if (!employeeData.email || !employeeData.password) {
      return;
    }
    console.log(employeeData)
    // If we have an email and password we run the loginEmployee function and clear the form
    loginEmployee(employeeData);
    clearAll();


  })

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginEmployee(employeeData) {
    console.log("inside employee login api")
    $.post("/api/employee/login", employeeData)
      .then(() => {
        console.log("success");
        window.location.replace("/employee/dashboard");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log("err");
        console.log(err);
      });
  }

  function clearAll() {
    $("#email-input").val("");
    $("#password-input").val("");
  }
});