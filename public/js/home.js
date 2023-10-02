$(".submit-btn").click(async function () {
    let data = {
        name: $("#name").val(),
        roomId: $("#room-id").val()
    }
    if (data.name === "") {
        alert("Name is Required")
    }
    else{
        if(data.roomId === ""){
            await $.ajax({
                "url": "/generate-room-id",
                "type": 'get',
                // A success handler
                "success": function (res) {
                    data.roomId = res;
                }
            });
        }
        
    }
    window.location.href = `/chat?name=${data.name}&roomId=${data.roomId}`
    
})