const { checkForName } = require("./nameChecker");

it("Checking name: ", () => {
    expect(checkForName("Picard")).toBe("Welcome");
});
