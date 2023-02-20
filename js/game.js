const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors"
const SET = [ROCK, PAPER, SCISSORS];

function getComputerChoice() {
    a = Math.floor(Math.random() * 3);
    return SET[a];
}

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (playerSelection === ROCK && computerSelection === SCISSORS || 
        playerSelection === SCISSORS && computerSelection === PAPER ||
        playerSelection === PAPER && playerSelection === ROCK) {
        return "Player wins!"
    } else {
        return "Computer wins!"
    }
}

function game() {
    let score = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock, paper or scissors? Score: " + score);
        playerSelection = playerSelection.toLowerCase();
        if (SET.includes(playerSelection)) {
            let result = playGame(playerSelection, getComputerChoice());
            if (result.toLowerCase().includes("player")) {
                score++;
            }
            console.log(result);
            
        }else {
            i--;
            console.log("Thats not right! Try again!")
        }
    }
}


// game();
