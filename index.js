console.log("Hello World")

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.random();

 if (randomNumber < 0.33) {
     return "rock";
 } else if (randomNumber < 0.66) {
     return "paper";
 } else {
     return "scissors";
 }
}

function getHumanChoice() {
    let userInput = prompt("Choose rock, paper or scissors?")
    if (userInput === null) {
        return null;
    }
    return userInput.toLocaleLowerCase();
}

// Game Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("oh! it's a tie!")
        console.log("oh! it's a tie!")
    } else if(
             (humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        alert("You win " + humanChoice + " beats " + computerChoice);
        console.log("You win " + humanChoice + " beats " + computerChoice);
        humanScore = humanScore + 1;
    
    } else {
        alert("You lose! " + computerChoice + " beats " + humanChoice);
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore = computerScore + 1;
        }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();

    if (humanSelection === null) {
        alert("You cancelled the game");
        console.log("You cancelled the game");
        return;
    }
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        alert("you win");
        console.log("you win");
    } else if (computerScore > humanScore) {
        alert("better luck next time");
        console.log("better luck next time");
    } else {
        alert("It's a tie")
        console.log("It's a tie")
    }
}
    playGame();

    
//Scoreboard
alert("--- CURRENT SCORE ---\nYou: "+ humanScore + " | Computer: " + computerScore);
console.log("--- CURRENT SCORE ---\nYou: "+ humanScore + " | Computer: " + computerScore);
