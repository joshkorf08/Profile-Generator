class Employee{
    
    constructor(name, email, id, school){
        this.name = name;
        this.email = email;
        this.id = id;
        this.school = school;

    }
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getRole(){
        return "Employee";
    };
    getEmail(){
        return this.email;
    }
    getSchool(){
        return this.school
    }

}

module.exports = Employee;