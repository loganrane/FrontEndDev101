function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById("name").value;
    // Client.checkForName(formText);
    Client.validateURL(formText);

    // POST request using fetch()
    fetch("http://localhost:8081/add", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify({
            text: formText,
        }),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => console.log(json));

    console.log("::: Form Submitted :::");
    fetch("http://localhost:8081/test")
        .then((res) => res.json())
        .then(function (data) {
            console.log(data);
            document.getElementById(
                "results"
            ).innerHTML = `The tone of the message is: ${data.polarity}`;
            document.getElementById(
                "text-doc"
            ).innerHTML = `The text parsed from website is: ${data.text}`;
            document.getElementById(
                "subject"
            ).innerHTML = `The subjectivity of text is: ${data.subjectivity}`;
        });

    return "API called";
}

export { handleSubmit };
