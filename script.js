function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors']
    let randomCompChoice = Math.floor(Math.random() * computerChoice.length + 1)

    if(randomCompChoice === 1) {
        return 'rock';
    } else if (randomCompChoice === 2) {
        return 'paper';
    } else if (randomCompChoice === 3) {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors"
    }
    return "You win!";
}

const playerSelection = window.prompt('Choose Rock, Paper, or Scissors');
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

function game() {
    playRound();
    for (let i = 0; i < 5; i++) {
    }
}

game(5);