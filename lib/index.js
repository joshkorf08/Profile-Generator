const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const manager = require("./lib/mnager")
const generateHtml = require("./index.html")

const engineer = [];
const intern = [];
const managers = [];

const questions = [
    {
        type: "input",
        name: "name",
        message: "what is the employee's name"

    },
    {
        type: "input",
        name: "id",
        message: "what is this employee's id"

    },
    {
        type: "input",
        name: "role",
        message: "what is this employee's email address?",
    },
    {
        type: "list",
        name: "role",
        message: "what is this employee's position?"
        choices: ["Manager", "Engineer", "Intern"],
        
    },
    {
        type: "input",
        name: "officenumber",
        message: "what is your employee office number?",
        when: (data) => (data.role).includes("Manager"),
    },
    {
        type: "input",
        name: "github",
        questions: "what is this employees github profile name?",
    },
    {
        type: "input",
        name: "school",
        questions: "what school did this employee attend",
    },
    {
        type: "confirm",
        name: "adding",
        questions: "Is there another employee to add?",
    }

];

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(data);
        if ((data.role).includes('Manager')) {
            managers.push(new Manager(data.name, data.id, data.email, data.officenumber));
            console.log(managers);
        } else if ((data.role).includes('Engineer')) {
            engineers.push(new Engineer(data.name, data.id, data.email, data.github));
            console.log(engineers)
        } else if ((data.role).includes('Intern')) {
            interns.push(new Intern(data.name, data.id, data.email, data.school));
            console.log(interns);
        if (data.adding === true) {
            prompts();



    function writeTheFile(content){
    fs.writeFile(`index.html`, content, (err) =>
    err ? console.error(err): console.log("Great Job!"))
};

init();