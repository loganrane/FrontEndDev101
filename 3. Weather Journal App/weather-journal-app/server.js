// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
let express = require("express");

// Start up an instance of app
let app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
let cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8000;

const server = app.listen(port, function () {
    console.log("Server is running.");
    console.log(`Server is at localhost : ${port}`);
});

// GET Route
app.get("/all", sendData);

function sendData(req, res) {
    res.send(projectData);
}

// POST Route
const data = [];
app.post("/add", callBack);

function callBack(req, res) {
    data.push(req.body);
}
