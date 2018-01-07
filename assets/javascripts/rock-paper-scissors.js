// Select Image Buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// Select Container
let container = document.querySelector(".container");

// Select Scores
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let gameRound = 1;

// Add Event Listeners
rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);

//
let result = document.createElement('div');
container.appendChild(result);

// Randomly returns Rock, Paper, or Scissors
function randomRPS() {
  let handChoices = ['rock', 'paper', 'scissors'];
  return handChoices[Math.floor(Math.random()*handChoices.length)];
}

// Runs a round of Rock, Paper, Scissors
function round() {
  let playerSelection = this.id.toUpperCase();
  let computerSelection = randomRPS().toUpperCase();
  if(playerSelection === computerSelection) {
    result.textContent = `Draw! The computer and you both selected ${playerSelection}.`;
    gameRound++;
  } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
             (playerSelection === "PAPER" && computerSelection === "ROCK") ||
             (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
    result.textContent = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    playerScore.textContent = +playerScore.textContent + 1;
    gameRound++;
  } else {
    result.textContent = `You lose this round.. ${computerSelection} beats ${playerSelection}.`;
    computerScore.textContent = +computerScore.textContent + 1;
    gameRound++;
  }
  if (gameRound > 5) {
    showWinner(playerScore, computerScore);
  }
}

function showWinner(playerScore, computerScore) {
  if(+playerScore.textContent > +computerScore.textContent) {
    result.textContent += `\nYou win!`;
  } else {
    result.textContent += `\nThe computer wins!`;
  }
}
