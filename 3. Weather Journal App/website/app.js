/* Global Variables */
const apiKey = "176b2eca49b0489b01225ef0b8981701";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", generateFunction);

function generateFunction() {
    const zipCode = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    const urlToPass = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    retrieveData(urlToPass).then(function (data) {
        console.log(data);
        postData("/add", {
            date: newDate,
            feelings: feeling,
            temp: data.main.temp,
        }).then(updateUI());
    });
}

// POST request
let postData = async (url, data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("Error", error);
    }
};

// GET request
let retrieveData = async (url) => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        console.log(allData);
        return allData;
    } catch (error) {
        console.log("Error", error);
    }
};

const updateUI = async () => {
    const request = await fetch("/all");
    try {
        const allData = await request.json();
        console.log(allData);
        document.getElementById("date").innerHTML = allData[0].date;
        document.getElementById("temp").innerHTML = allData[0].temp;
        document.getElementById("content").innerHTML = allData[0].feeling;
    } catch (error) {
        console.log("error", error);
    }
};
