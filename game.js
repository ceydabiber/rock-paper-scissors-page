
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
    let roundCounter = 0;
    const maxRounds = 5;

    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "Here are the results:";
    document.body.appendChild(content);

    const scoreDisplay = document.createElement("p");
    content.appendChild(scoreDisplay);

    const resultText = document.createElement("p");
    content.appendChild(resultText);


    function updateDisplay() {
        scoreDisplay.textContent = `Current Score: You - ${humanScore}, Computer - ${computerScore}`;
        if (roundCounter >= maxRounds) {
            if (humanScore > computerScore) {
                resultText.textContent = "Congratulations! You win the game!";
            } else if (humanScore < computerScore) {
                resultText.textContent = "Sorry, the computer wins the game. Better luck next time!";
            } else {
                resultText.textContent = "The game is a tie!";
            }
            // Disable buttons after the game is over
            btnRock.disabled = true;
            btnPaper.disabled = true;
            btnScissors.disabled = true;
        } else {
            resultText.textContent = "Play another round!";
        }
    }



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
        roundCounter += 1;
        updateDisplay();
    }

    const btnRock = document.createElement('button');
    btnRock.textContent = 'rock';
    document.body.appendChild(btnRock);

    const btnPaper = document.createElement('button');
    btnPaper.textContent = 'paper';
    document.body.appendChild(btnPaper);

    const btnScissors = document.createElement('button');
    btnScissors.textContent = 'scissors';
    document.body.appendChild(btnScissors);


    btnRock.addEventListener('click', () => {
        const humanChoice = 'rock';
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    btnPaper.addEventListener('click', () => {
        const humanChoice = 'paper';
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    btnScissors.addEventListener('click', () => {
        const humanChoice = 'scissors';
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });

    updateDisplay();

}

playGame();
