$(".submit-btn").click(function () {
    let data = {
        name: $("#name").val(),
        roomId: $("#room-id").val()
    }
    if (data.name === "") {
        alert("Name is Required")
    }
    else{
        $.ajax({
            // make sure you respect the same origin policy with this url:
            // http://en.wikipedia.org/wiki/Same_origin_policy
            "url": "/enter-room",
            "type": 'post',
            "data":data,
           
            // A success handler
            "success": function (res) {
                console.log(res);
            }
        });
    }
})