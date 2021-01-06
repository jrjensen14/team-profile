const fs = require('fs');
const inquirer = require('inquirer');
// const { type } = require('os');



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
function promptTeamProfile() {
  function managerProfile() {
    console.log('Enter your team members information');

    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'Please enter the managers name (Required)',
        validate: managerName => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a name."
        }
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the managers ID (Required)',
        validate: managerId => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a manager ID."
        }
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the managers email (Required)',
        validate: managerEmail => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a manager ID."
        }
      },
      {
        type: 'input',
        name: 'managerOfficeNumber',
        message: 'Please enter the managers office number (Required)',
        validate: managerOfficeNumber => {
          if (answer !== "") {
            return true;
          }
          return "Please enter a manager office number."
        }
      },
    ])
  };

  // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
  function buildTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'teamOptions',
        choices:
          [
            'Engineer',
            'Intern',
            'Finish building team'
          ]
      }
    ])
  }

  // WHEN I select the engineer option
  // THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
  function engineerProfile() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter an engineer name (Reqired)',
        validate: engineerName => {
          if (answer !== "") {
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
          if (answer !== "") {
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
          if (answer !== "") {
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
          if (answer !== "") {
            return true;
          }
          return "Please enter an engineer Email."
        }
      },
    ])
  }

  // WHEN I select the intern option
  // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
  function internProfile() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'internName',
        message: 'Please enter the interns name (Reqired)',
        validate: internName => {
          if (answer !== "") {
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
          if (answer !== "") {
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
          if (answer !== "") {
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
          if (answer !== "") {
            return true;
          }
          return "Please enter interns school."
        }
      },
    ])
  }
};
promptTeamProfile().then(answers => {
  console.log(answers)

  const data = generateMarkdown(answers)
  fs.writeFile("index.js", data, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);
  })
});

// function init() {

// }

promptTeamProfile();
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
