function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRPSRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    let pair = player + "." + computer;

    if (pair === "rock.rock" || 
        pair === "paper.paper" || 
        pair === "scissors.scissors"
    ) {
        return "Tie! " + playerSelection + " equals " + computerSelection
    }
    else if (
        pair === "rock.scissors" ||
        pair === "paper.rock" ||
        pair === "scissors.paper"
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection 
    } 
    else {
        return "You Lose! " + computerSelection + " beats " + playerSelection
    }
}


function game(playRPSRound) {
    let computerTally = 0;
    let playerTally = 0;
    
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors? Input here: ")
        let result = playRPSRound(playerSelection, computerPlay());
        console.log(result);
        if (result.startsWith("You Win")) {
            playerTally++;
        } else if (result.startsWith("You Lose")) {
            computerTally++;
        }
    }

    if (computerTally > playerTally) {
        return "Computer Wins!"
    } else if (playerTally > computerTally) {
        return "You Win!"
    } else {
        return "Tie!"
    }
}

console.log(game(playRPSRound));








