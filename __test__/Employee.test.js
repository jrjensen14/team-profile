const Employee = require('../lib/Employee');

// Employee Properies:
// Name, Id, Email, 

test('create a new Employee', () => {
    const emp = new Employee();

    expect(emp.name).toBe('employee object');
})
// Employee Methods:
// getName(), getId(), getEmail(), getRole()-returns 'Employee'