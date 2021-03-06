$(document).ready(function () {
  $("#buttonajax").click(function () {
    var data = {
      name: $("#nameajax").val(),
      country: $("#countryajax").val(),
      message: $("#messageajax").val(),
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
