
const btns = document.querySelectorAll(".btn");
const display = document.querySelector("#display");
const runningTotal = document.querySelector("#running-total");
const final = document.querySelector("#final");

/*const roundOne = document.querySelector("#result-one");
const roundTwo = document.querySelector("#result-two");
const roundThree = document.querySelector("#result-three");
const roundFour = document.querySelector("#result-four");
const roundFive = document.querySelector("result-five");*/

/*Next step it to swap the console logs for the scores to display the 
results of the rounds in the <p> elements within the display box*/

btns.forEach((btn) => 
    btn.addEventListener("click", () => {
        let playerChoice = btns.id;
        playGame(playerChoice);
    })
)

function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        console.log("CPU picks rock.");
        return "rock";
    } else if (result === 2) {
        console.log("CPU picks paper.");
        return "paper";
    } else {
        console.log("CPU picks scissors.");
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
    // for (let i = 0; i < 5; i++) {
    playRound();
    function playRound(humanChoice, computerChoice) {
    humanChoice = playerChoice;
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
            let roundResult = document.createElement("p");
            roundResult.innerText = `Draw, ${humanChoice} and ${computerChoice}.`;
            display.appendChild(roundOne);
            // console.log(`Draw, ${humanChoice} and ${computerChoice}.`)
        } else if (
            (humanChoice === "rock" & computerChoice === "paper") || 
            (humanChoice === "scissors" & computerChoice === "rock") ||
            (humanChoice === "paper" & computerChoice === "scissors")
        ) {
            computerScore = computerScore + 1
            let roundResult = document.createElement("p");
            roundResult.innerText = `You lose, ${computerChoice} beats ${humanChoice}!`;
            // console.log(`You lose, ${computerChoice} beats ${humanChoice}!`)
            return console.log(`CPU score is: ${computerScore}`);
            return computerScore++;
        } else if (
            (computerChoice === "rock" & humanChoice === "paper") || 
            (computerChoice === "scissors" & humanChoice === "rock") ||
            (computerChoice === "paper" & humanChoice === "scissors")
        ) {
            humanScore = humanScore + 1
            console.log(`You win, ${humanChoice} beats ${computerChoice}!`)
            return console.log(`Your score is: ${humanScore}`);
            return humanScore++;
        }
}
    // }
    if (humanScore > computerScore) {
        final.innerText = `You've won! The final score is You: [${humanScore}] | CPU: [${computerScore}]!`;
        // console.log(`You've won! The final score is You: [${humanScore}] | CPU: [${computerScore}]!`);
    } else if (humanScore < computerScore) {
        final.innerText = `You've Lost! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`
        // console.log(`You've won! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`);
    } else {
        final.innerText = `It's a draw! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`;
        // console.log(`It's a draw! The final score is You: [${computerScore}] | CPU: [${humanScore}]!`);
    }
}