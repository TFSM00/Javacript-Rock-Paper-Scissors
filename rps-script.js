const results = document.querySelector("div#results");
const tally = document.querySelector("div#tally");
const body = document.querySelector("body");
const playerTally = document.querySelector("#playerWins");
const computerTally = document.querySelector("#computerWins");


let playerWins = 0
let computerWins = 0

playerTally.textContent = "Player's Wins: " + playerWins;
computerTally.textContent = "Computer's Wins: " + computerWins;

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRPSRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let pair = player + "." + computer;
    let response = 0;

    if (playerWins<5 && computerWins<5) {
        if (pair === "rock.rock" || 
            pair === "paper.paper" || 
            pair === "scissors.scissors"
        ) {
            response = 0;
        }
        else if (
            pair === "rock.scissors" ||
            pair === "paper.rock" ||
            pair === "scissors.paper"
        ) {
            playerWins++;
            playerTally.textContent = "Player's Wins: " + playerWins;
            computerTally.textContent = "Computer's Wins: " + computerWins;
            response = 1;
        } 
        else {
            computerWins++;
            playerTally.textContent = "Player's Wins: " + playerWins;
            computerTally.textContent = "Computer's Wins: " + computerWins;
            response = 2;
        }
    }
    
    if (playerWins === 5 || computerWins === 5) {
        console.log(playerWins)
        console.log(computerWins)
        const resultEnd = document.querySelectorAll("#result")
        resultEnd.forEach( (res) => {
            res.remove()
        })
        const gameOver = document.createElement("p")
        if (playerWins > computerWins) {
            gameOver.textContent = "You Win!"
            results.appendChild(gameOver)
        } else {
            gameOver.textContent = "You Lost!"
            results.appendChild(gameOver)
        }
       
    } else {
        if (response === 0) {
            return "Tie! " + playerSelection + " equals " + computerSelection
        } else if (response === 1) {
            return "You Win! " + playerSelection + " beats " + computerSelection 
        } else {
            return "You Lose! " + computerSelection + " beats " + playerSelection
        }
    }

}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = document.createElement("p");
        result.id = "result"
        result.textContent = playRPSRound(button.textContent, computerPlay());
        results.appendChild(result);
    });
});



// function game(playRPSRound) {
//     let computerTally = 0;
//     let playerTally = 0;
    
//     for (let i=0; i<5; i++) {
//         let playerSelection = prompt("Rock, Paper or Scissors? Input here: ")
//         let result = playRPSRound(playerSelection, computerPlay());
//         console.log(result);
//         if (result.startsWith("You Win")) {
//             playerTally++;
//         } else if (result.startsWith("You Lose")) {
//             computerTally++;
//         }
//     }

//     if (computerTally > playerTally) {
//         return "Computer Wins!"
//     } else if (playerTally > computerTally) {
//         return "You Win!"
//     } else {
//         return "Tie!"
//     }
// }

// console.log(game(playRPSRound));
