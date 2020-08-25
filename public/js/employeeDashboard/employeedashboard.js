$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".employee-name").text(data.email);
   
  });

  $.get("/api/user/binrequest").then(result => {
    console.log("inside bin request api front")
    console.log(result)
    for(var i= 0;i<result.legth;i++){
      var user =result[i];
    var newRow = $("<div>")
    if(user.unitNumber !==0){
      var newColumn = $("<p>").text(user.fullName
        +" At address:"
        +user.unitNumber+" "
        +user.houseNumber+" "
        +user.streetName+" "
        +user.postcode);
    }
    else{
      var newColumn = $("<p>").text(user.fullName
        +" At address:"
        +user.houseNumber+" "
        +user.streetName+" "
        +user.postcode);
    }
    
    var newButton = $("<button>");
    newButton.text("Accept Request")
    newRow.append(newColumn, newButton);
    $(".newDiv").append(newRow);
  }
   
  })
});
