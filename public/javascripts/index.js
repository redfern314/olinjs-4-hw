$(function () {
  $('#composeform').on('submit', function () {
    $.post("/tweets/:user", $('#composeform').serialize(), function(data) {
        if(data!=""){
            alert(data);
        } else {
            $('#twitinput').val("");
        }
    });
    return false;
  });
});

var refresh = function() {
    $.get("/tweets", function(data) {
        $('#feedbody').html(data);
    });
    console.log("wat");
}

setInterval(refresh,2000);