
const Employee = require("../lib/employee");
class Engineer extends Employee{
    constructor(name, email, id, githubUsername){
        super(name, email, id);
        this.github = githubUsername;

    }
    getRole(){
       return "Engineer" 
    }
    getGithub(){
        return `https://github.com//${this.github}/`
    }
}

module.exports = Engineer; 
