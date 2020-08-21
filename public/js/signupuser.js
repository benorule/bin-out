$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const unitNumber = $("input#unitNumber");
  const houseNumber = $("input#houseNumber");
  const streetName = $("input#streetName");
  const postcode = $("input#postcode");
  const proofOfAddress = $("input#proofOfAddress");
  const request = $("input#request");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      unitNumber: unitNumber.val().trim(),
      houseNumber: houseNumber.val().trim(),
      streetName: streetName.val().trim(),
      postcode: postcode.val().trim(),
      proofOfAddress: proofOfAddress.val().trim(),
      request: request.val().trim()
    };

    if (!userData.unitNumber || !userData.houseNumber || !userData.streetName || !userData.postcode || !userData.proofOfAddress || !userData.request) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.unitNumber, userData.houseNumber, userData.streetName, userData.postcode, userData.proofOfAddress, userData.request);
    unitNumber.val("");
    houseNumber.val("");
    streetName.val("");
    postcode.val("");
    proofOfAddress.val("");
    request.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/user/signup", {
      unitNumber: unitNumber,
      houseNumber: houseNumber,
      streetName: streetName,
      postcode: postcode,
      proofOfAddress: proofOfAddress,
      request: request
    })
      .then(() => {
        // window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
