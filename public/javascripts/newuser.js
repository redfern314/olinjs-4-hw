$(function () {
  $('#userform').on('submit', function () {
    $.post("/users/new", $('#userform').serialize());
    $('#header').html("Logged in!");
    $("#signup").html('<FORM METHOD="LINK" ACTION="/"><INPUT TYPE="submit" VALUE="Home"></FORM>');
    return false;
  });
});