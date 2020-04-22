import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


fifaData.forEach(function(item) {
    if(item.Year === 2014 && item.Stage === 'Final'){
        console.log(item['Home Team Name']);
        console.log(item['Away Team Name']);
        console.log(item['Home Team Goals']);
        console.log(item['Away Team Goals']);
        console.log(item['Win conditions']);
    } 
});



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    const finalData = data.filter(function(item){
        return item.Stage === 'Final';
    });
    return finalData;
};

console.log(getFinals(fifaData))

/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback, data) {
    const finalyears = callback(data).map(function(item){
        return item.Year;
    });
    return finalyears;
};
    

console.log(getYears(getFinals, fifaData));

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback, data){
    const winners = [];
    
    callback(data).forEach(function(item) {

        if (item['Home Team Goals'] > item['Away Team Goals']) {
            winners.push(item['Home Team Name']);
        } else if (item['Home Team Goals'] < item['Away Team Goals']) {
            winners.push(item['Away Team Name']);
        } else {
            winners.push(item['Win conditions'].split(' ')[0]);
        }
    });
    
    return winners;
};

console.log(getWinners(getFinals, fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(winners, years, data) {

    const year = getYears(getFinals, data);
    const winner = getWinners(getFinals, data);
    const allWinners = [];

       getFinals(data).forEach(function(item, i){
                allWinners.push(`In ${year[i]}, ${winner[i]} won the world cup!`);
        });

        return allWinners;
};

console.log(getAllWinners(getWinners, getYears, fifaData))


/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

 
function getCountryWins(data, ti) {
    
    var winners = getWinners(getFinals, data);
    winners = winners.map(function(x){
        return x.substring(0, 3).toUpperCase();
    });
    let count = winners.reduce(function(z, item){

       return z + (item === ti.toUpperCase());
    }, 0);
    return count; 
};

console.log(getCountryWins(fifaData, 'ARG'));


/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */
//  need list of everysingle team, how many goals every team Scored, how many games every team played in, get their average, compare teams to see who has highest average goals, return that team.


function getGoals(data) {
    let teamList = [];
    let teamGoals = [];
    let highGoalAvg = 0;
    let winner 

    data.forEach(function(item){
        if (!teamList.includes(item['Home Team Name'])){
            teamList.push(item['Home Team Name']);
        }else if (!teamList.includes(item['Away Team Name'])){
            teamList.push(item['Away Team Name']);
        }
    });

    teamList.forEach(function(team){
        let goalScored = 0;
        let gamesPlayed = 0;

        data.forEach(function(match){
            if (match['Home Team Name'] === team){
                match['Home Team Goals'] += goalScored;
                gamesPlayed += 1;
            }else if (match['Away Team Name'] === team){
                match['Away Team Goals'] += goalScored;
                gamesPlayed += 1;
            };
        }); 

        teamGoals.push(goalScored/gamesPlayed)
    });
    console.log(teamList);
    console.log(teamGoals);
    // create a for loop compares each team highest average goal scored
};

getGoals(fifaData);


/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();


/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */