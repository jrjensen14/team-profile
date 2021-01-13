const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

// Intern Properites: Employee's properties & school
// Methods: getSchool()& getRole() - Overridden to return 'Intern'

test('create intern school property', () => {
    const school = "Vandy";
    const i = new Intern("Kat", 1, "test@test.com", school);
    expect(i.school).toBe(school);
});

test('set intern school function', () => {
    const school = "Vandy";
    const i = new Intern("Kat", 1, "test@test.com", "Vandy");
    expect(i.getSchool()).toBe(school);
});

test('set getRole() to Intern', () => {
    const role = "Intern";
    const i = new Intern("Kat", 1, "test@test");
    expect(i.getRole()).toBe(role);
});