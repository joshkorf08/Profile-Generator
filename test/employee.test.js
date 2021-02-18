const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee.js");

test("will give new Employee instances", () => {
    const E = new Employee();
    expect(typeof(E)).toBe("object");
});

test("user can set a name as their name", () => {
    const name = "Josh";
    const E = new Employee(name);
    expect(E.getName()).toBe(name);
});
test("will set id as a number", () => {
    const testValue = ""
})