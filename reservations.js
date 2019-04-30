// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

var tables = [];
var waitlist = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res){
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function (req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res){
    return res.json(tables);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

