//Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user 
//input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched". 

const readline = require('readline');

const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Guess a number between 1 and 10: ", (input) => {
  const userGuess = parseInt(input, 10);

  if (userGuess === randomNumber) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }

  console.log("Random number was:", randomNumber);

  rl.close();
});
