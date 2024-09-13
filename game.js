
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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("It's a tie! Try again for another round");
    }
    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You have win this round. Congrats!");
        }
        if (computerChoice == "scissors"){
            console.log("You have lost this round. Try again!");
        }
    }
    if (humanChoice == "rock"){
        
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)