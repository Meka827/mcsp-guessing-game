const player = prompt("Hey! What's your name!")
var count = 0;
let history: {};


function play() {  
  const SECRET_NUMBER = Math.floor(Math.random() * 10) + 1;
  var guessArray = [];
  while(true) {
    var guess = prompt(`OK ${player}, Guess a number!`);
    count++
    guessArray.push(guess);
    if (guess === null) {
      alert("Goodbye!");
      break;
    }

    var numGuess = Number(guess);

    if(Number.isNaN(numGuess)) {
      alert("Please enter a valid number");
    } else if (numGuess > SECRET_NUMBER) {
      alert(`Sorry ${player}, Guess Lower`);
    } else if (numGuess < SECRET_NUMBER) {
      alert(`Sorry ${player}, Guess Higher`);
    } else {
      alert(`That's Correct ${player}! Your previous guesses are ${formatArray(guessArray)}!`);
      var playAgain = prompt('Do you want to play again?')
      if (playAgain.toLowerCase() === 'yes') {
        play();
      } else {
        break;
      }
    }
  }

}

var formatArray = function(array) {
  var string = '';
  if (array.length === 1) {
    string = array.slice(0).join()
  } else if (array.length === 2) {
    string = array.join(' and ')
  } else if(array.length > 2) {
    string = array.slice(0, -1).join(', ') + ', and ' + array.slice(-1);
  }
  return string;
}

play();
