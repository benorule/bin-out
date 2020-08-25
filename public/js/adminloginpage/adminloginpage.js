$(document).ready(() => {

    // Getting references to our form and inputs
    const loginForm = $("form.login");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
  
    loginForm.on("submit", (event) => {
      event.preventDefault();
      console.log("on admin login button clicked")
  
      const adminData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      }
  
      if (!adminData.email || !adminData.password) {
        return;
      }
      console.log(adminData)
      // If we have an email and password we run the loginEmployee function and clear the form
      loginAdmin(adminData);
      clearAll();
    })
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function loginAdmin(adminData) {
      $.post("/api/admin/dashboard", adminData)
        .then((response) => {
          console.log("inside success");
          console.log(response)
          window.location.replace("/admin/dashboard");
          // If there's an error, log the error
        })
        .catch(err => {
          console.log("inside err");
          console.log(err);
        });
    }
  
    function clearAll() {
      $("#email-input").val("");
      $("#password-input").val("");
    }
  });