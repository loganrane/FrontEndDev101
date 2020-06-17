const validateURL = (userInput) => {
    console.log("::: Running check for URL :::");
    var res = userInput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    );
    if (res == null) alert("URL not found");
    else {
        alert("URL found");
        return true;
    }
};

export { validateURL };
