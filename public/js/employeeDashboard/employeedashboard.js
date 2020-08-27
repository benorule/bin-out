
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page

  var employeeId = "";

  $.get("/api/user_data").then(data => {
    console.log(data)
    $(".employee-name").text(data.email);
    employeeId = data.id
  });


  $.get("/api/update/binrequest").then(function (result) {
    console.log("inside bin request api front")
    console.log(result)

    for (var i = 0; i < result.length; i++) {
      var user = result[i];
      var newRow = $("<h1>").text("BIN REQUEST FROM:")
      var fullName = $("<h2>").text(`Name: ${user.fullName}`)
      var unitNumber = $("<h2>").text(`Unit Number:${user.unitNumber}`)
      var houseNumber = $("<h2>").text(`House Number:${user.houseNumber}`)
      var streetName = $("<h2>").text(`Street Name:${user.streetName}`)
      var postcode = $("<h2>").text(`Postcode:${user.postcode}`);
      var acceptButton = $("<button>").attr("data-id", user.id).attr("id", "acceptedRequest").text("Accept Request")
      var completeButton = $("<button>").attr("data-id", user.id).attr("id", "completed").text("Complete Request")
      newRow.append(fullName, unitNumber, houseNumber, streetName, postcode, acceptButton, completeButton);
      $(".newDiv").append(newRow)

      completeButton.hide();
      acceptButton.on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const employee = parseInt(employeeId);
        console.log(id, employee);
        $.ajax(
          {
            type: "PUT",
            url: "/api/" + employee + "/binrequest/accepted/" + id

          }).then((response) => {
            //add here
            console.log("Updated Succesfully")
            acceptButton.hide();
            completeButton.show();

          }).catch((err) => {
            console.log("Something went wrong")
          })

      });

      completeButton.on("click", function (event) {
        event.preventDefault()
        const id = $(this).data("id");
        const employee = 1;
        console.log(id, employee);
        $.ajax({
          type: "PUT",
          url: "/api/employee/binrequest/completed/" + id
        }).then((response) => {
          console.log("Updated Succesfully")
          newRow.hide();

        }).catch((err) => {
          console.log("Something went wrong")
        })
      });

    }


  });

});
