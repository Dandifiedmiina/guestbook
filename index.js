var http = require("http");
var express = require("express");
var app = express();
var fs = require("fs");
const path = require("path");

// Otetaan body-parser -moduuli käyttöön
var bodyParser = require("body-parser");
const { json } = require("body-parser");

// Otetaan se käyttöön app-nimisessä express-sovelluksessa
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("./"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/newmessage", function (req, res) {
  res.sendFile(__dirname + "/newmessage.html");
});

app.post("/newmessage2", function (req, res) {
  var name = req.body.name;
  var country = req.body.country;
  var message = req.body.message;
  var dateFormat = require("dateformat");

  var date = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

  var json = require("./guestbook.json");

  console.log("Taulukon koko: " + json.length);

  var newitem = {
    name: name,
    country: country,
    message: message,
    date: date,
  };

  json.push(newitem);

  var datanew = JSON.stringify(json, "", 1);

  fs.writeFileSync("./guestbook.json", datanew);

  res.sendFile(__dirname + "/readguestbook.html");
  console.log("added");
});

app.get("/ajaxmessage", function (req, res) {
  res.sendFile(__dirname + "/ajaxmessage.html");
});

app.post("/ajaxmessage", function (req, res) {
  console.log(req.body.nameajax);

  var name = req.body.name;
  var country = req.body.country;
  var message = req.body.message;
  var date = new Date();

  var data = require("./guestbook.json");

  data.push({
    name: name,
    country: country,
    message: message,
    date: date,
  });

  var datanew = JSON.stringify(data, "", 1);
  fs.writeFileSync("./guestbook.json", datanew);

  res.send(
    "You left a message: " + name + " " + country + " " + message + " @ " + date
  );
});

app.get("/readguestbook", function (req, res) {
  res.sendFile(__dirname + "/readguestbook.html");
});

app.get("*", function (req, res) {
  res.send("Cant find the requested page", 404);
});

// Web-palvelimen luonti
app.listen(process.env.PORT || 5000, function () {
  console.log("Example app listening on port 3003!");
});

function results(err, data) {
  if (err) return console.error(err);
  console.log("log");
}
