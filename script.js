// const buttonRock = document.querySelector("#rock");
// const buttonPaper = document.querySelector("#paper");
// const buttonScissors = document.querySelector("#scissors");
const btns = document.querySelectorAll("button");
const display = document.querySelector("#display");
const playerPick = document.querySelector("#player-choice")
const CPUPick = document.querySelector("#CPU-choice");
const outcome = document.querySelector("#outcome");
const playerPoints = document.querySelector("#player-score");
const CPUPoints = document.querySelector("#CPU-score")
const final = document.querySelector("#final");

// let humanChoice;

// buttonRock.addEventListener("click", () => {
//     humanChoice = "rock";
//     playerPick.innerText = "You pick Rock";
//     console.log(humanChoice);
//     playGame();
// });
// buttonPaper.addEventListener("click", () => {
//     humanChoice = "paper";
//     console.log(humanChoice);
//     playerPick.innerText = "You pick Paper";
//     playRound();
// });
// buttonScissors.addEventListener("click", () => {
//     humanChoice = "scissors";
//     console.log(humanChoice);
//     playerPick.innerText = "You pick Scissors";
//     playRound();
// })

/*For each button, add an event listener for a click*/

btns.forEach((btn) => 
    btn.addEventListener("click"), () => {
        console.log(btns.id)
        if (btns.id) {
            playRound(btns.id)
        }
})


// btns.forEach((btn) => 
//     btn.addEventListener("click", () => {
//         btns.values();
//         playGame();
//     })
// )

// playerRock.addEventListener("click", () => {
//     playerChoice === "rock";
// })


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

/* With buttons and event handler now taking the player's choice,　
this function is obsolete*/
// function getHumanChoice() {
//     let result = prompt("Please enter 'rock', 'paper', or 'scissors'.");
//     if (result.length === 4) {
//         console.log("You pick rock.");
//         return "rock";
//     } else if (result.length === 5) {
//         console.log("You pick paper.");
//         return "paper";
//     } else if (result.length === 8) {
//         console.log("You pick scissors.");
//         return "scissors";
//     }
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    playRound();
    function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    if (btn.id === computerChoice) {
            outcome.innerText = `Draw, ${humanChoice} and ${computerChoice}.`;
        } else if (
            (humanChoice === "rock" & computerChoice === "paper") || 
            (humanChoice === "scissors" & computerChoice === "rock") ||
            (humanChoice === "paper" & computerChoice === "scissors")
        ) {
            computerScore = computerScore + 1
            outcome.innerText = `You lose, ${computerChoice} beats ${humanChoice}!`;
            CPUPoints.innerText = `The CPU score is: ${computerScore}`;
            return computerScore++;
        } else if (
            (computerChoice === "rock" & humanChoice === "paper") || 
            (computerChoice === "scissors" & humanChoice === "rock") ||
            (computerChoice === "paper" & humanChoice === "scissors")
        ) {
            humanScore = humanScore + 1
            playerPoints.innerText = `Player score is: ${humanScore}`;
            outcome.innerText = `You win, ${humanChoice} beats ${computerChoice}!`;
            return humanScore++;

        }
}

    if (humanScore > computerScore) {
        final.innerText = `You've won! The final score is You: [${humanScore}] | CPU: [${computerScore}]!`;
    } else if (humanScore < computerScore) {
        final.innerText = `You've Lost! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`
    } else {
        final.innerText = `It's a draw! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`;
    }
}