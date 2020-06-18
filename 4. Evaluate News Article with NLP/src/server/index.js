const dotenv = require("dotenv");
dotenv.config();

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var aylien = require("aylien_textapi");
const bodyParser = require("body-parser");
const cors = require("cors");

// Set API credentials
var textapi = new aylien({
    application_id: "1d1b6dc7",
    application_key: "46c1aa6ed8deb52923dc1e246c29b374",
});

const app = express();
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
    res.sendFile("dist/index.html");
    // res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
    textapi.sentiment(
        {
            url: data[data.length - 1].text,
            mode: "document",
        },
        function (error, response) {
            if (error === null) {
                console.log(response);
                res.send(response);
            } else {
                console.log("error", error);
            }
        }
    );
});

const data = [];

app.post("/add", addData);

function addData(req, res) {
    data.push(req.body);
    res.send({ success: true, message: "data submitted successfully" });
    console.log(data);
}
