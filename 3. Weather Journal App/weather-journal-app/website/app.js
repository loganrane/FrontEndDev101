/* Global Variables */
const apiKey = "176b2eca49b0489b01225ef0b8981701";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

document.getElementById("generate").addEventListener("click", generateFunction);

function generateFunction() {
    const zipCode = document.getElementById("zip").value;
}
