const inquirer = require('inquirer');
/*const fs = require('fs');
const generatePage = require('./src/page-template.js');

const teamDataArgs = process.argv.slice(2, process.argv.length);

const [name, title] = teamDataArgs;

fs.writeFile('./index.html', generatePage(name, title), err => {
    if(err) throw err;

    console.log('Page complete!  Check out index.html to see the output');
});*/

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    }
])
.then(answers => console.log(answers));
