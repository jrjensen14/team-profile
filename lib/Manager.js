const Employee = require('./Employee');

// Manager Prperties: Employees properties & officeNumber
// Manager Methods: gitRole(), -Overridden to return 'Manager'
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {
        return "Manager"
    }
}
const manager1 = new Manager("Patty", 55, "patty@gmail", 9090)
console.log(manager1)
console.log(manager1.getOfficeNumber())

module.exports = Manager;