const teamDataArgs = process.argv.slice(2, process.argv.length);
const [name, title] = teamDataArgs;

const generatePage = (employeeName, jobTitle) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2>${title}</h2>
    </body>
    </html>
  `;
};

console.log(name, title);
console.log(generatePage(name, title));













/*const printTeamData = teamDataArr => {
    for (let i = 0; i < teamDataArr.length; i += 1) {
        console.log(teamDataArr[i]);
    }

    console.log('=================');

    //same way to write

    teamDataArr.forEach(teamItem => console.log(teamItem));
};

printTeamData(teamDataArgs);*/