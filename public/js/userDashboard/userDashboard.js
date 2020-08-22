$(document).ready(() => {

    
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
   
    $("#onsendRequest").on("click", function () {

        event.preventDefault()
        console.log("On user bin send request clicked")
        var date = $("#datepicker").val();
        var userUniqueId = $("#userUniqueId").val()

        console.log(date)
        console.log(userUniqueId)
        $.post("/api/user/binOutRequest", {
            requestDate: date,
            userUniqueId:userUniqueId
          })
            .then(() => {
              window.location.replace("/userDashboard");
              // If there's an error, log the error
            })
            .catch(err => {
              console.log(err);
            });
        })
});
