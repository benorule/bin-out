
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  

  $.get("/api/user_data").then(data => {
    $(".employee-name").text(data.email);

  });


  $.get("/api/user/binrequest").then(result => {
    console.log("inside bin request api front")
    console.log(result)
    for (var i = 0; i < result.length; i++) {
      var user = result[i];
      var newRow = $("<div>")
      if (user.unitNumber !== 0) {
        var newColumn = $("<p>").text(user.fullName
          + " At address:"
          + user.unitNumber + " "
          + user.houseNumber + " "
          + user.streetName + " "
          + user.postcode);
      }
      else {
        var newColumn = $("<p>").text(user.fullName
          + " At address:"
          + user.houseNumber + " "
          + user.streetName + " "
          + user.postcode);
      }

      var newButton = $("<button>");
      newButton.attr("data-id", user.id);
      newButton.attr("id", "acceptedRequest");
      newButton.text("Accept Request")
      var completeButton = $("<button>");
      completeButton.attr("data-id", user.id);
      completeButton.attr("id", "completed");
      completeButton.text("Complete Request")
      newRow.append(newColumn, newButton, completeButton);
      $(".newDiv").append(newRow);
      newButton.on("click", function (event) {
        const id = $(this).data("id");
        const employee = 1;
        console.log(id,employee);
        $.ajax(
        {
          type:"PUT",
          url:"/api/"+employee+"/binrequest/accepted/"+id

        }).then(() => {
          //add here
          
        });
      });
      completeButton.on("click", function (event) {
        const id = $(this).data("id");
        const employee = 1;
        console.log(id,employee);
        $.ajax({
          type:"PUT",
          url:"/api/employee/binrequest/completed/"+id
        }).then(() => {

        });
      });
    }

  });

  
  
  
});
