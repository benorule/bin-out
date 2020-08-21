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

    $("#deleteUser").on("click", function () {

        console.log("On delete user clicked")

        $.ajax({
            url: '/api/delete/userrequest',
            type: 'DELETE',
            success: function (result) {
                // Do something with the result
            }
        });
    })


    $("#acceptEmployee").on("click", function () {

        console.log("On accept employee clicked")

        $.ajax({
            url: '/api/insert/employeerequest',
            type: 'POST',
            success: function (result) {
                // Do something with the result
            }
        });
    })

    $("#deleteEmployee").on("click", function () {

        console.log("On delete employee clicked")

        $.ajax({
            url: '/api/delete/employeerequest',
            type: 'DELETE',
            success: function (result) {
                // Do something with the result
            }
        });
    })


});
