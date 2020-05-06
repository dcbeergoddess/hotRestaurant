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
  res.sendFile(path.join(__dirname, "pages/index.html"));// Send back index.html file
});

app.get("/reservation", function(req, res){
  // Send back the reservation request html file


  res.sendFile(path.join(__dirname, "pages/reserve.html"));
});

app.get("/api/tables", function(req, res){
  // Send back json of all current tables reserved
  res.json(reservations);
});

app.get("/api/waitinglist", function(req, res){
  // Send back json of everyone on the waiting list
  res.json(waitingList);
});

app.post("/api/newreservation", function(req, res){

  // Parse posted data and do whatever we need to do
  let HTMLPage = "<!DOCTYPE html><head></head><body><p>PLACEHOLDER</p> <a href='http://localhost:3000/'>Back to the main page</a></body></html>";
  const newReservation = req.body;
  console.log(newReservation);

  if(reservations.length < 5)
  {
    reservations.push(newReservation);
    res.sendFile(path.join(__dirname,"pages/resSuccess.html"));
  }
  else
  {
    waitingList.push(newReservation);
    res.sendFile(path.join(__dirname, "pages/resWaiting.html"));
    
  const newReservation = req.body;
  //grab name value from object 
  console.log(newReservation);

  if(reservations.length < 5) {
    reservations.push(newReservation);
    res.end("You now have a reservation.");
  } else {
    waitingList.push(newReservation);
    res.end("You ended up on the waiting list.")
  }
});

app.listen(PORT, function () {
  console.log("App listening on http://localhost:" + PORT);
});

