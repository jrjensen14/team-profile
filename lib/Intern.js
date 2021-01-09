const Employee = require("./Employee");

// Intern Properites: Employee's properties & school
// Methods: getSchool()& getRole() - Overridden to return 'Intern'
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.getSchool
    }
    getRole() {
        return "Intern"
    }
}

const intern1 = new Intern("Bob", 4, "bob@gmail")
console.log(intern1)
console.log(intern1.getName())
console.log(intern1.getRole())

module.exports = Intern;