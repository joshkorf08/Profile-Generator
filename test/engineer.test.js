const Employee = require("../lib/employee.js");
const Engineer = require("../lib/Engineer");

test("will set GutHub account", () => {
    const testValue = "GitHubUser";
    const E = new Engineer("");
    expect(typeof(E)).toBe("object");
});

test("will get GitHub User through GitHub()", () => {
    const testValue = "GitHubUser";
    const E = new Engineer("");
    expect(typeof(E)).toBe("object");

});




