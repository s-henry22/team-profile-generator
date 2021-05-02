const inquirer = require('inquirer');
let teamDataArray = [];
/*const fs = require('fs');
const generatePage = require('./src/page-template.js');

const teamDataArgs = process.argv.slice(2, process.argv.length);

const [name, title] = teamDataArgs;

fs.writeFile('./index.html', generatePage(name, title), err => {
    if(err) throw err;

    console.log('Page complete!  Check out index.html to see the output');
});*/

const promptUser = employeeData => {
    
    //console.log('promptUser',teamDataArray);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'position',
            message: 'Enter your job title',
            validate: jobInput => {
                if (jobInput) {
                    return true;
                } else {
                    console.log('Please enter your job title.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'employeeID',
            message: 'Please enter your employee ID (Type number)',
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },

        {
            type:'number',
            name: 'office',
            message: 'What is your office number? (Type number)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddTeamMember',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])
    .then(userData => {
        teamDataArray.push(userData);
        if (userData.confirmAddTeamMember) {
            return promptUser(employeeData);
        } else {
            return employeeData;
        }
    });
};

promptUser()
    .then(employeeData => {
        console.log(teamDataArray);
    }
);





/*const promptUser = () => {
    return inquirer.prompt([
       {
           type: 'input',
           name: 'name',
           message: 'What is your name?'
       },
       {
           type: 'input',
           name: 'position',
           message: 'Enter your job title'
       },
       {
           type: 'number',
           name: 'employeeID',
           message: 'Please enter your employee ID'
       },
       {
           type: 'input',
           name: 'email',
           message: 'Please enter your email address'
       },

       {
           type:'number',
           name: 'office',
           message: 'What is your office number?'
       },
       {
           type: 'confirm',
           name: 'confirmAddTeamMember',
           message: 'Would you like to add another team member?',
           default: false
       }
   ]);
};*/
