const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

// Enginner Properits:addition to Employee's & github - GitHub username
// Methods: getGithub()& getRole() - Overridden to return 'Engineer'

test('create engineer github', () => {
    const github = "GitHubUser"
    const eng = new Engineer("Kat", 1, "test@test.com", "GitHubUser");
    expect(eng.github).toBe(github);
});

test('set engineer github', () => {
    const github = "GitHubUser";
    const eng = new Engineer("Kat", 1, "test@test.com", "GitHubUser");
    expect(eng.getGithub()).toBe(github);
});

test('set engineer getRole() to Engineer', () => {
    const role = "Engineer";
    const eng = new Engineer("Kat", 1, "test@test.com");
    expect(eng.getRole()).toBe(role);
});