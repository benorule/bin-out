$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".employee-name").text(data.email);
   
  });

  $.get("/api/user/binrequest").then(result => {
    console.log("inside bin request api")
    console.log(result)
    for(var i= 0;i<result.legth;i++){
    var newRow = $("<div>")
    var newColumn = $("<p>").text(result[0].id)
    var newButton = $("<button>");
    newButton.text("Accept Request")
    newRow.append(newColumn, newButton);
    $(".newDiv").append(newRow);
  }
   
  })
});
