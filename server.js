'use strict';

const PORT = 8080;
const Window = require('window');
const window = new Window();
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xml = new XMLHttpRequest();
const readline = require('readline');
const {google} = require('googleapis');
const fs = require('fs');
let bodyParser = require("body-parser");
let express = require('express');
let app = express();
app.use(express.static(__dirname + "/dashboard"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

//sends changes on the settings to the index page
app.get('/', function(req, res){
  res.sendfile('dashboard/index.html');
});


/*
 Create a new local storage instance if one doesn't already exist using node
 local storage to save directly on the server
*/
if (typeof localStorage === "undefined" || localStorage === null){
  var LocalStorage = require('node-localstorage').LocalStorage;
  var localStorage = new LocalStorage('./storage');
}

/*
  Returns the contents of the todo list to the client.
  The client will use this to put together the todo-list so that users may add or remove further tasks
*/
app.get("/todo", function(req,res){
  // No items, nothing sent.
  if(localStorage.getItem("todoitems") === null){
    res.status(404).send();
  }
  // If we find the file locally, send to the client.
  else{
    res.status(200).send(localStorage.getItem("todoitems"));
  }
});

/*
  Allows users to post changes to the todo-list and update the todo-list server-side.
*/
app.post("/todo", function(req,res){
  localStorage.setItem("todoitems", req.body.list);
  res.status(200).send("Stored!");
  res.end();
});

// Location

app.get("/location", function(req,res){
  //No location, show default
  if(localStorage.getItem("loc") === null){
    res.status(404).send();
  }
  else{
   //If something exists, get item from loc file
    res.status(200).send(localStorage.getItem("loc"));
  }
});

//Calendar

app.get("/calend", function(req,res){
  //If no item chosen, show default
  if(localStorage.getItem("csource") === null){
    res.status(404).send();
  }
  else{
    //If something exist, get items from csource
    res.status(200).send(localStorage.getItem("csource"));
  }
});

//Background Colour

app.get("/bgcolour", function(req,res){
  //If nothing is chosen, show default
  if(localStorage.getItem("bgcolour") === null){
    res.status(404).send();
  }
  else{
    //Else display last chosen file in bgcolour
    res.status(200).send(localStorage.getItem("bgcolour"));
  }
});

//News Source

app.get("/newssource", function(req,res){
  //If no item is chosen, display deafault
  if(localStorage.getItem("newssource") === null){
    res.status(404).send();
  }
  else{
    //Else, show last selected item from newssoruce
    res.status(200).send(localStorage.getItem("newssource"));
  }
});

//Updates the selected options chosen by the admin, applies changes once
//apply changes button is pressed and then sent to settings.html
app.post("/getOptions", function (req, res) {
  localStorage.setItem("loc", req.body.weatherlocation);
  localStorage.setItem("newssource", req.body.newssource);
  localStorage.setItem("bgcolour", req.body.bgcolour);
  localStorage.setItem("csource", req.body.calendarsource);
//Displays changes selected on the command prompt
  console.log(req.body.weatherlocation);
  console.log(req.body.newssource);
  console.log(req.body.bgcolour);
  console.log(req.body.calendarsource);
  res.sendfile('dashboard/settings.html');
});




//start the server and displays a welcome message, if server doesnt start,
//display an error.
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('Welcome to Dashboard 1.0. Your server has started on port 8080!');
})
