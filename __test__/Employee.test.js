const Employee = require('../lib/Employee');

// Employee Properies:
// Name, Id, Email, 

test('create a new Employee object', () => {
    const emp = new Employee();

    expect(typeof(emp)).toBe('object');
});

test('set Manager name', () => {
    const name = "Kat"
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('set Manager ID', () => {
    const id = 100;
    const emp = new Employee("Tom", id);
    expect(emp.id).toBe(id);
});

test('set Manager email', () => {
    const email = "test@test.com";
    const emp = new Employee("Tom", 1, email);
    expect(emp.email).toBe(email);
});
// Employee Methods:
// getName(), getId(), getEmail(), getRole()-returns 'Employee'

test('get name from gitName()', () => {
    const name = "Kat";
    const emp = new Employee(name);
    expect(emp.getName()).toBe(name);
});

test('get ID from getID()', () => {
    const id = 100;
    const emp = new Employee("Kat", id);
    expect(emp.getId()).toBe(id);
});

test('get email from getEmail()', () => {
    const email = "test@test.com";
    const emp = new Employee("Kat", 1, email);
    expect(emp.getEmail()).toBe(email);
});

test('getRole() should return Employee', () => {
    const role = "Employee";
    const emp = new Employee("Kat", 1, "test@test.com");
    expect(emp.getRole()).toBe(role);
})