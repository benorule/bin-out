$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const fullName = $("input#fullName");
  const email = $("input#email");
  const password = $("input#password");
  const address = $("input#address");
  const postcode = $("input#postcode");
  const proofOfId = $("input#proofOfId");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      fullName: fullName.val().trim(),
      email: email.val().trim(),
      password: password.val().trim(),
      address: address.val().trim(),
      postcode: postcode.val().trim(),
      proofOfId: proofOfId.val().trim()
    };

    if (!userData.fullName || !userData.email || !userData.password || !userData.address || !userData.postcode || !userData.proofOfId) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.fullName, userData.email, userData.address, userData.postcode, userData.proofOfId);
    fullName.val("");
    email.val("");
    password.val("");
    address.val("");
    postcode.val("");
    proofOfId.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      fullName: fullName,
      email: email,
      password: password,
      address: address,
      postcode: postcode,
      proofOfId: proofOfId
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
