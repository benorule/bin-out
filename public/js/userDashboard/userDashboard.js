$(document).ready(() => {

    
    $( function() {
      $( "#datepicker" ).datepicker();
    } );
   
    $("#onsendRequest").on("click", function () {

        event.preventDefault()
        console.log("On user bin send request clicked")
        var date = $("#datepicker").val();
        var userUniqueId = $("#userUniqueId").val()

        console.log(typeof(date))
        console.log(userUniqueId)
        $.post("/api/user/bin/request", {
            date: date,
            userId:userUniqueId
          })
            .then(() => {
              //window.location.replace("/user/dashboard");
              // If there's an error, log the error
            })
            
        })
});
