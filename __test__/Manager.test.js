const Manager = require('../lib/Manager');

// Manager Prperties: Employees properties & officeNumber
// Manager Methods: gitRole(), -Overridden to return 'Manager'

test ('create office numeber property', () => {
    const officeNumber = 100;
    const mang = new Manager("Kat", 1, "test@test.com", officeNumber);
    expect(mang.officeNumber).toBe(officeNumber);
});

test ('set office number function', () => {
    const officeNumber = 100;
    const mang = new Manager("Kat", 1, "test@test.com", 100);
    expect(mang.getOfficeNumber()).toBe(officeNumber);
});

test ('set manager getRole() to Manager', () => {
    const role = "Manager";
    const mang = new Manager("Kat", 1, "test@test.com");
    expect(mang.getRole()).toBe(role);
});