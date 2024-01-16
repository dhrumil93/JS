const randomNum = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const userGuess = document.querySelector(".guesses");
const results = document.querySelector(".lastResult");
const LowHigh = document.querySelector(".lowOrHi");
const restart = document.querySelector(".resultParas");

const d = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click' , function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value())
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)){
        alert ('Please Enter Valid Number.')
    }else if (guess < 1){
        alert ('Please Enter Valid Number.')        
    }
}

function cheackGuess(guess) {
  // console.log("Number Is Correct.");
}

function displayGuess(guess) {
    
}

function displayMessage(message) {
  //
}

function endGame() {
    // 
}

function newGame() {
    // 
}