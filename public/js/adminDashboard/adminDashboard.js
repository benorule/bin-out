$(document).ready(() => {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });

    $("#acceptUser").on("click", function () {

        console.log("On accept user clicked")

        $.ajax({
            url: '/api/insert/userrequest',
            type: 'POST',
            success: function (result) {
                // Do something with the result
            }
        });
    })

    $(".deleteUser").on("click", function () {
        event.preventDefault()
        console.log("On delete user clicked")

       let id= $(this).data("id")
       console.log(id)
       $.ajax({
        method: "DELETE",
        url: "/api/user/delete/" + id
      }).then(()=>{
           location.reload();
        })
    })


    $(".acceptEmployee").on("click", function () {
        event.preventDefault()
        console.log("On Update Employee clicked")

       let id= $(this).data("id")
       console.log(id)
       $.ajax({
        method: "PUT",
        url: "/api/employee/update/" + id
      }).then(()=>{
           location.redirect("admin/employees");
        })
    })

    $(".deleteEmployee").on("click", function () {
        event.preventDefault()
        console.log("On delete Employee clicked")

       let id= $(this).data("id")
       console.log(id)
       $.ajax({
        method: "DELETE",
        url: "/api/employee/delete/" + id
      }).then(()=>{
           location.redirect("admin/employees");
        })
    })


});
