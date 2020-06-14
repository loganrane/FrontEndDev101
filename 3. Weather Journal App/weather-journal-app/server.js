// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 5500;

const server = app.listen(port, function () {
    console.log("Server is running.");
    console.log(`Server is at localhost : ${port}`);
});

// GET Route
app.get("/all", sendData);

function sendData(req, res) {
    res.send(projectData);
    console.log(projectData);
}

// POST Route
app.post("/add", callBack);
function callBack(req, res) {
    newEntry = {
        date: req.body.date,
        feeling: req.body.feelings,
        temp: req.body.temp,
    };
    projectData.push(newEntry);
    res.send(projectData);
    console.log(projectData);
}
