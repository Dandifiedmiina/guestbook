$(document).ready(function () {
  $.getJSON("guestbook.json", function (data) {
    var table =
      "<table><tr><th>Names</th><th>Countries</th><th>Messages</th><th>Dates</th></tr>";
    for (var x = 0; x < data.length; x++) {
      table +=
        "<tr>" +
        "<td>" +
        data[x].name +
        "</td>" +
        "<td>" +
        data[x].country +
        "</td>" +
        "<td>" +
        data[x].message +
        "</td>" +
        "<td>" +
        data[x].date +
        "</td>" +
        "</tr>";
    }

    $("#msgtable").html(table);
  });
});
