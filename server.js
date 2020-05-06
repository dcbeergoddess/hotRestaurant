const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000; 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//What Routes do we need:
    // Home Page (GET)
    // Make a Reservation Page (GET)
    // API Request for Handler to show Current Tables (GET)
    // API Request Handler to show Waiting List (GET)
    // API route to handle POSTing a new reservation request (POST)

//What Varialbes do we need
  // Who has a reservation (array)
  // who is on the waiting list (array)
  
const reservations = [];
//if have 5 or more in reservations add to waiting list
const waitingList = [];  

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "index.html"));// Send back index.html file
});

app.get("/reservation", function(req, res){
  // Send back the reservation request html file
});

app.get("/api/tables", function(req, res){
  // Send back json of all current tables reserved
});

app.get("/api/waitinglist", function(req, res){
  // Send back json of everyone on the waiting list
});

app.post("/api/newreservation", function(req, res){
  // Parse posted data and do whatever we need to do
});

app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});

