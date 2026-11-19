let humanScore = 0;
let computerScore = 0;
let gameOver = false;

// DOM Selector
const cards = document.querySelectorAll(`.card`);
const humanScoreSpan = document.querySelector(`#human-score`);
const computerScoreSpan = document.querySelector(`#computer-score`);
const roundResultDiv = document.querySelector(`#round-result`);
const winnerDiv = document.querySelector(`#winner-announcement`);
const resetBtn = document.querySelector(`#reset-btn`);

//computer choice function
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    }else if (randomNumber < 0.66){
        return "paper";
    }else {
        return "scissors";
    }
}

//play round function
function playRound(humanChoice, computerChoice) {
    if (gameOver) return;

    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = "Oh! It`s a tie! Both chose " + humanChoice;
    } else if (
        (humanChoice ==="rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundResultDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        roundResultDiv.textContent = "Computer wins! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }

    humanScoreSpan.textContent = humanScore;
    computerScoreSpan.textContent = computerScore;

    checkWinner();

    // Update the score display
    function checkWinner() {
        if (humanScore === 5) {
            gameOver = true;
            winnerDiv.textContent = "Congratulations! You won the game!";
        } else if (computerScore === 5) {
            gameOver = true;
            winnerDiv.textContent = "Computer won the game! Better luck next time!";
            resetBtn.style.display = "inline-block";
        } else if(computerScore === 5) {
            gameOver = true;
            winnerDiv.textContent = "Computer won the game! Better luck next time!";
            resetBtn.style.display = "inline-block";
        }
    }
    //Event Listener for 3 cards
    cards.forEach(card => {
        card.addEvenListener(`click`, () => {
            const humanSelection = card.CDATA_SECTION_NODE.choice;
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);
        })
    })

    //reset button
    resetBtn.addEventListener(`click`, () => {
        humanScore = 0;
        computerScore = 0;
        gameOver = false;
        humanScoreSpan.textContent = 0;
        computerScoreSpan.textContent = 0;
        roundResultDiv.textContent = "Select yourr Card!";
        winnerDiv.textContent = "";
        resetBtn.style.display = "none";
    });