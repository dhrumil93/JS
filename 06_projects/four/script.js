let randomNum = parseInt(Math.random() * 100 + 1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const results = document.querySelector('.lastResult');
const loworHight = document.querySelector('.lowOrHi');
const restart = document.querySelector('.resultParas');

const d = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submitButton.addEventListener('click' , function (event) {
        event.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)){
        alert ('Please Enter Valid Number.')
    }else if (guess < 1){
        alert ('Please Enter Number Greater than 1.')        
    }
    else if (guess > 100){
        alert ('Please Enter Number less than 100.')        
    }else {
        prevGuess.push(guess);
        if (numGuess === 11 ){
            displayGuess(guess);
            displayMessage(`Game Over , Random Number was ${randomNum}`);
            endGame();
        } else {
            displayGuess(guess);
            cheackGuess(guess);
        }
    }
}

function cheackGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Your Guess Is Correct`);
        endGame()
    }else if (numGuess > 1 ) {
        displayMessage(`Number is tooo High`);
    }
    else if (numGuess < 100 ) {
        displayMessage(`Number is tooo Low`);
    }
}

function displayGuess(guess) {
    userInput.value = ' '
    userGuess.innerHTML += `${guess} `;
    numGuess ++ ;
    results.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    loworHight.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '' 
    userInput.setAttribute('disabled' , '')
    d.classList.add('button')
    d.innerHTML = '<h2 id="newGame>Start New Game</h2>';
    restart.appendChild(d);
    playGame = false ;
    newGame()
}

function newGame() {
    const newButton = document.querySelector('#newGame')
    newButton.addEventListener('click', function(event){
        randomNum = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        userGuess = '';
        results.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        restart.removeChild(d)
        playGame = true ;
    })

}