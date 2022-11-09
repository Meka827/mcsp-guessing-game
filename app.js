const history = {};


function play() {
   let guessCounter = 1;
   const player = prompt("Hey! What's your name!");
   let correctNum = Math.floor(Math.random() * 10) + 1;
   var count = 0;
   //var guessArray = [];

   while (true) {
      const guess = prompt(`OK ${player}, Guess a number!`);
      if (guess === null) {
         alert("Goodbye!");
         break;
      }
      let numGuess = Number(guess);

      if (Number.isNaN(guess)) {
         alert("Please enter Valid Number");
         numGuess++;
      } else if (guess < correctNum) {
         alert(`Sorry ${player}, Guess Higher!`);
         numGuess++;
      } else if (guess > correctNum) {
         alert(`Sorry ${player}, Guess Lower!`);
         numGuess++;
      } else {

         if (history[player] === undefined) {
            alert(`${player} Correct! It only took you ${numGuess} guesses!}`);
         } else {
            const previousAtt = history[player];
            const difference = previousAtt - numGuess;

            if (difference < 0) {
               alert(`That's Correct ${player}! You did better in your last game by ${Math.abs(difference)} fewer guesses.`);
            } else if (difference > 0) {
               alert(`That's Correct ${player}! You beat you previous attempt by ${difference} fewer guesses.`);
            } else {
               alert(`That's Correct ${player}! You tied your previous attempt.`);
            }
         }
         //alert(${player} Correct! It only took you ${count} guesses! \n Previous Entries: ${guessArray});
         history[player] = numGuess;
         const goAgain = prompt("Do you want to play again?");
         if (goAgain.toLowerCase() === "yes") {
            play();
         } else if(goAgain.toLowerCase() === "no"){
            break;
         }
      }
   };
}
play();