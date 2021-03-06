$(document).ready(function () {
  $("#ajaxbutton").click(function () {
    var data = {
      name: $("#name2").val(),
      country: $("#country2").val(),
      message: $("#message2").val(),
    };

    if ($("#nameajax").val() == "") {
      alert("Check that you have filled every field!");
    } else if ($("#countryajax").val() == "") {
      alert("Check that you have filled every field!");
    } else if ($("#messageajax").val() == "") {
      alert("Check that you have filled every field!");
    } else {
      $.post("/ajaxmessage", data, function (response, status) {
        $("#msgtableajax").html(response);
      });
    }
  });
});
