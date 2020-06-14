/* Global Variables */
const apiKey = "176b2eca49b0489b01225ef0b8981701";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
console.log(newDate);

document.getElementById("generate").addEventListener("click", generateFunction);

function generateFunction() {
    const zipCode = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    const urlToPass = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;
    let retrieve = async (url) => {
        let data = await fetch(urlToPass);
        try {
            let newData = await data.json();
            return newData;
        } catch (error) {
            console.log("error", error);
        }
    };

    tempData = retrieve(urlToPass);
    console.log(tempData);
}

// POST request
let postData = async (url = "", data = {}) => {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("Error", error);
    }
};

// GET request
let retrieveData = async (url = "") => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
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

// // Retrieve Data
// function getAPI() {
//     const zipCode = document.getElementById("zip").value;
//     const feeling = document.getElementById("feelings").value;
//     const urlToPass = `api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

//     fetch(urlToPass)
//         .then((res) => {
//             res.json();
//             console.log(res.json());
//         })
//         .then((data) => {
//             document.getElementById("date").innerHTML = newDate;
//             document.getElementById("temp").innerHTML = " place ";
//             document.getElementById("content").innerHTML = feeling;
//         });
// }
