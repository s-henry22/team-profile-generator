module.exports = templateData => {
    const { information } = templateData;
    console.log(templateData);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="./src/css/style.css">
    </head>

    <body>
        <h1>${templateData.name}</h1>
        <h2>${templateData.position}</h2>
    </body>
    </html>
  `;
};
