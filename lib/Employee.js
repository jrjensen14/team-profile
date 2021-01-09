class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}
// const employee1 = new Employee("Kat", 1, "jj@gamial")
// console.log(employee1)
// console.log(employee1.getName())
// const employee2 = new Employee("josh", 2, "@gmail")
// console.log(employee2)



module.exports = Employee;