const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const playerPick = document.querySelector("#player-choice")
const CPUPick = document.querySelector("#CPU-choice");
const outcome = document.querySelector("#outcome");
const playerPoints = document.querySelector("#player-score");
const CPUPoints = document.querySelector("#CPU-score")
const final = document.querySelector("#final");
const reset = document.querySelector("#reset");

let round = 1;
let humanScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click", () => {
    choice = buttonRock.id;
    playerPick.innerText = "You pick Rock.";
    playGame(choice);
});
buttonPaper.addEventListener("click", () => {
    choice = buttonPaper.id;
    playerPick.innerText = "You pick Paper.";
    playGame(choice);
});
buttonScissors.addEventListener("click", () => {
    choice = buttonScissors.id;
    playerPick.innerText = "You pick Scissors.";
    playGame(choice);
});

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        CPUPick.innerText = "CPU picks Rock.";
        return "rock";
    } else if (result === 2) {
        CPUPick.innerText = "CPU picks Paper.";
        return "paper";
    } else {
        CPUPick.innerText = "CPU picks Scissors.";
        return "scissors";
    }
}

reset.addEventListener("click", resetGame);

function playGame() {

    if (round < 5) {    
    playRound();
    function playRound(humanChoice, computerChoice) {
        computerChoice = getComputerChoice();
        humanChoice = choice;
        if (humanChoice === computerChoice) {
                outcome.innerText = `Draw, ${humanChoice} and ${computerChoice}.`
                final.innerText = `You're on round ${round}. The best out of 5 rounds wins.`;
                return round++;
            } else if (
                (humanChoice === "rock" & computerChoice === "paper") || 
                (humanChoice === "scissors" & computerChoice === "rock") ||
                (humanChoice === "paper" & computerChoice === "scissors")
            ) {
                computerScore += 1
                outcome.innerText = `You lose, ${computerChoice} beats ${humanChoice}!`;
                CPUPoints.innerText = `CPU score: ${computerScore}`;
                final.innerText = `You're on round ${round}. The best out of 5 rounds wins.`;
                return round++ && computerScore;
            } else if (
                (computerChoice === "rock" & humanChoice === "paper") || 
                (computerChoice === "scissors" & humanChoice === "rock") ||
                (computerChoice === "paper" & humanChoice === "scissors")
            ) {
                humanScore += 1
                playerPoints.innerText = `Player score: ${humanScore}`;
                outcome.innerText = `You win, ${humanChoice} beats ${computerChoice}!`;
                final.innerText = `You're on round ${round}. The best out of 5 rounds wins.`;
                return round++ & humanScore;

            
            }
    }
    } else if (round === 5)
        if (humanScore > computerScore ) {
            final.innerText = `You've won! The final score is You: [${humanScore}] | CPU: [${computerScore}]!`;
        } else if (computerScore > humanScore) {
            final.innerText = `You've Lost! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`
        } else {
            final.innerText = `It's a draw! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`;
        }
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    playerPoints.innerText = "Player Score: 0";
    CPUPoints.innerText = "CPU Score: 0"
    playerPick.innerText = " ";
    CPUPick.innerText = " ";
    outcome.innerText = " ";
    final.innerHTML = `The best out of 5 rounds wins. Are you ready?`;
};