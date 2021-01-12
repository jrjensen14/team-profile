const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const render = require('./src/page-template.js');
const path = require("path");
const fs = require('fs');
const team = [];

const outputPath = path.join("team.html");

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
function createTeamApp() {

  function promptManager() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the managers name (Required)',
        validate: inputName => {
          if (inputName !== "") {
            return true;
          }
          return "Please enter a name."
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the managers ID (Required)',
        validate: managerInput => {
          if (managerInput !== "") {
            return true;
          }
          return "Please enter a manager ID."
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the managers email (Required)',
        validate: emailInput => {
          if (emailInput !== "") {
            return true;
          }
          return "Please enter a manager ID."
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter the managers office number (Required)',
        validate: officeNumberInput => {
          if (officeNumberInput !== "") {
            return true;
          }
          return "Please enter a manager office number."
        }
      },
    ])
      .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        promptBuildTeam();
      });
  };

  // //Then I am prompted with a menu option to add Engineer, Intern, & finish building team

  function promptBuildTeam(teamData) {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'teamOptions',
        message: 'Which member of the team would you like to add?',
        choices:
          [
            'Engineer',
            'Intern',
            'Finish building team'
          ]
      }
    ])
      .then(teamMemberChoice => {
        switch (teamMemberChoice.teamOptions) {
          case "Engineer":
            promptEngineer();
            break;
          case "Intern":
            promptIntern();
            break;
          default:
            buildTeam()
        }
      });
  }

  // WHEN I select the engineer option
  // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  function promptEngineer() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter an engineer name (Reqired)',
        validate: engineerName => {
          if (engineerName !== "") {
            return true;
          }
          return "Please enter an engineer name."
        }
      },
      {
        type: 'input',
        name: 'engineerId',
        message: 'Please enter an engineer ID (Reqired)',
        validate: engineerId => {
          if (engineerId !== "") {
            return true;
          }
          return "Please enter an engineer ID."
        }
      },
      {
        type: 'input',
        name: 'engineerGithub',
        message: 'Please enter an engineer GitHub username (Reqired)',
        validate: engineerGithub => {
          if (engineerGithub !== "") {
            return true;
          }
          return "Please enter an engineer GitHub username."
        }
      },
      {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter an engineer Email (Reqired)',
        validate: engineerEmail => {
          if (engineerEmail !== "") {
            return true;
          }
          return "Please enter an engineer Email."
        }
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerGithub, answers.engineerEmail);
      team.push(engineer);
      promptBuildTeam();
    })
  }

  // WHEN I select the intern option
  // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  function promptIntern() {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns name (Reqired)',
        validate: internName => {
          if (internName !== "") {
            return true;
          }
          return "Please enter the interns name."
        }
      },
      {
        type: 'input',
        name: 'internId',
        message: 'Please enter the interns ID (Reqired)',
        validate: internId => {
          if (internId !== "") {
            return true;
          }
          return "Please enter the interns ID."
        }
      },
      {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the interns email address (Reqired)',
        validate: internEmail => {
          if (internEmail !== "") {
            return true;
          }
          return "Please enter the interns email address."
        }
      },
      {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the school the intern attended (Reqired)',
        validate: internSchool => {
          if (internSchool !== "") {
            return true;
          }
          return "Please enter interns school."
        }
      },
    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      team.push(intern);
      promptBuildTeam();
    })
  };

  // //if there's no 'projects' aray property, create one
  function buildTeam() {
    fs.writeFileSync(outputPath, render(team), "utf-8");
  }

  promptManager();
}

createTeamApp();

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
