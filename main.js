console.log()


// Challenge #1: Wheel of Fortune
// Three candidates take part in a TV show. In order to decide who will take part in the final game and probably become rich, they have to roll the Wheel of Fortune!The Wheel of Fortune is divided into 20 sections, each with a number from 5 to 100 (only mulitples of 5). Each candidate can roll the wheel once or twice and sum up the score of each roll. The winner one that is closest to 100 (while still being lower or equal to 100). In case of a tie, the candidate that rolled the wheel first wins.

// You receive the information about each candidate as an array of objects: each object should have a name and a scores array with the candidate roll values. Display the name of the winner or false if there is no winner (all scored more than 100).

// Examples:

// var players = [{ name: "Bob", scores: [10, 65] }, { name: "Bill", scores: [90, 5] }, { name: "Charlie", scores: [40, 55] }]; // Displays "Bill"
// var players = [{ name: "Bob", scores: [15, 20] }, { name: "Bill", scores: [10, 15] }, { name: "Charlie", scores: [90, 10] }]; // Displays "Charlie"

var player = [
{
    name: "Bob",
    scores: [10,65]
},
{
    name: "Bill",
    scores: [90,5] 
},
{
    name: "Charlie",
    scores: [10,65]
}
];

//  console.log ("player", player);
var highScore = 0;
var winner = [];

for(var i = 0 ; i < player.length; i++){
  var scoreSum = 0;
  var arrayScores = player[i].scores;
  for (var j =0; j < arrayScores.length; j++){
    scoreSum+= arrayScores[j];
}
  if (scoreSum > 100){
      winner = false;
  }else if (scoreSum > highScore){
      highScore = scoreSum;
      winner =[];
      winner.push(player[i].name);
  }
}

//console.log(winner);

var winDiv = document.getElementById('challenge-one');
var printWinner = '<h1> Winner:' + winner + '</h1>';
//printWinner += '<h2> Score: ' + highScore + '</h2>';
winDiv.innerHTML = printWinner;
