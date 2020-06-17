const { validateURL } = require("./checkURL");

it("URL validation", () => {
    expect(validateURL("https:/www.google.com")).toBe(true);
});
