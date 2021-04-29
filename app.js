const teamDataArgs = process.argv.slice(2, process.argv.length);

const printTeamData = teamDataArr => {
    for (let i = 0; i < teamDataArr.length; i += 1) {
        console.log(teamDataArr[i]);
    }

    console.log('=================');

    //same way to write

    teamDataArr.forEach(teamItem => console.log(teamItem));
};

printTeamData(teamDataArgs);