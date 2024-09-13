
function getComputerChoice(){

    const randomNumber = Math.floor(Math.random() * 3); 
    let computerChoice;

    if (randomNumber == 0){
        computerChoice = "rock"; 
    }
    if (randomNumber == 1){
        computerChoice = "scissors";
    }
    if (randomNumber == 2){
        computerChoice = "paper";
    }

    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper or scissors?");
    if (humanChoice) {
        // Convert the input to lowercase to handle case insensitivity
        humanChoice = humanChoice.toLowerCase();

        // Check if the input is one of the valid choices
        if (['rock', 'paper', 'scissors'].includes(humanChoice)) {
            return humanChoice;
        } else {
            // If the input is invalid, prompt the user again
            alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
            return getHumanChoice(); // Recursive call to prompt the user again
        }
    } else {
        // Handle the case where the user cancels the prompt
        alert("No choice entered. Please enter 'rock', 'paper', or 'scissors'.");
        return getHumanChoice(); // Recursive call to prompt the user again
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! Try again for another round");
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You have won this round. Congrats!");
                humanScore += 1;
            } else if (computerChoice === "scissors") {
                console.log("You have lost this round. Try again!");
                computerScore += 1;
            }
        } else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("You have won this round. Congrats!");
                humanScore += 1;
            } else if (computerChoice === "paper") {
                console.log("You have lost this round. Try again!");
                computerScore += 1;
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("You have won this round. Congrats!");
                humanScore += 1;
            } else if (computerChoice === "rock") {
                console.log("You have lost this round. Try again!");
                computerScore += 1;
            }
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current Score: You - ${humanScore}, Computer - ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, the computer wins the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
