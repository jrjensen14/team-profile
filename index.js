const inquirer = require('inquirer');

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Please enter the managers name (Required)',
      // validate: managerName => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter a name."
      // }
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Please enter the managers ID (Required)',
      // validate: managerId => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter a manager ID."
      // }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'Please enter the managers email (Required)',
      // validate: managerEmail => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter a manager ID."
      // }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'Please enter the managers office number (Required)',
      // validate: managerOfficeNumber => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter a manager office number."
      // }
    },
  ])
};

const promptBuildTeam = () => {
  return inquirer.prompt([
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
  .then(teamMemberChoice => {
    switch(teamMemberChoice.teamOptions) {
      case "Engineer":
        promptEngineer();
      break;
      case "Intern":
        promptIntern();
      break;
      default:
        promptBuildTeam()
    }
  });
}

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'Please enter an engineer name (Reqired)',
      // validate: engineerName => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter an engineer name."
      // }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Please enter an engineer ID (Reqired)',
      // validate: engineerId => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter an engineer ID."
      // }
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: 'Please enter an engineer GitHub username (Reqired)',
      // validate: engineerGithub => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter an engineer GitHub username."
      // }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'Please enter an engineer Email (Reqired)',
      // validate: engineerEmail => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter an engineer Email."
      // }
    },
  ])
}

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'Please enter the interns name (Reqired)',
      // validate: internName => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter the interns name."
      // }
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Please enter the interns ID (Reqired)',
      // validate: internId => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter the interns ID."
      // }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'Please enter the interns email address (Reqired)',
      // validate: internEmail => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter the interns email address."
      // }
    },
    {
      type: 'input',
      name: 'internSchool',
      message: 'Please enter the school the intern attended (Reqired)',
      // validate: internSchool => {
      //   if (answer !== "") {
      //     return true;
      //   }
      //   return "Please enter interns school."
      // }
    },
  ])
};


promptManager()
  .then(answers => console.log(answers))
  .then(promptBuildTeam)
  .then(teamanswers => console.log(teamanswers))
  .then(promptEngineer)
  .then(engineerAnswers => console.log(engineerAnswers))
  .then(promptIntern)
  .then(internAnswers => console.log(internAnswers));



  // // WHEN I start the application
// // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// // WHEN I enter the team manager’s name, employee ID, email address, and office number


// // // WHEN I decide to finish building my team
// // // THEN I exit the application, and the HTML is generated
