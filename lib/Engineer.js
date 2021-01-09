const Employee = require('./Employee')

// Enginner Properits:addition to Employee's & github - GitHub username
// Methods: getGithub()& getRole() - Overridden to return 'Engineer'

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}
// const engineer1 = new Engineer("Tom", 3, "tom@gmail", "tom@github")
// console.log(engineer1)
// console.log(engineer1.getName())
// console.log(engineer1.getRole())


module.exports = Engineer;
