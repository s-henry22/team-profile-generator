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
    
    console.log('promptUser',teamDataArray);

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
