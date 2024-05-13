function getComputerChoice() {
    let getNum = Math.floor(Math.random() * 3);
    var computerChoice;
    if (getNum == 0) {
        computerChoice = "rock";
    }
    else if (getNum == 1) {
        computerChoice = "paper";
    }
    else if (getNum == 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let getPrompt = parseInt(prompt("Please type 0 for Rock, 1 for Paper, 2 for Scissors."));
    var humanChoice;
    if (getPrompt == 0) {
        humanChoice = "rock";
    }
    else if (getPrompt == 1) {
        humanChoice = "paper";
    }
    else if (getPrompt == 2) {
        humanChoice = "scissors";
    }
    else {
        alert("Invalid input. Please try again.");
        humanChoice = getHumanChoice(); 
    }
    
    return humanChoice;
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    let result = "";
    let comp = computerChoice.toLowerCase();
    let human = humanChoice.toLowerCase();
    console.log("Computer Chose:" + comp);
    console.log("You chose:" + human);
    if (comp == "rock" && human == "paper") {
        result = "Paper beats rock - you win that round!";
        console.log(result);
        humanScore++;
    }
    else if (comp == "rock" && human == "scissors") {
        console.log(result = "Rock beats scissors - you lost this one...");
        computerScore++;
    }
    else if (comp == "rock" && human == "rock") {
        console.log(result = "Wow - It's a tie!");
    }
    else if (comp == "paper" && human == "paper") {
        console.log(result = "Wow - It's a tie!");
    }
    else if (comp == "paper" && human == "rock") {
        console.log(result = "Paper beats rock - you lost this one...");
        computerScore++;
    }
    else if (comp == "paper" && human == "scissors") {
        console.log(result = "Scissors beats paper - you win that round!");
        humanScore++;
    }
    else if (comp == "scissors" && human == "scissors") {
        console.log(result = "Wow - It's a tie!");
    }
    else if (comp == "scissors" && human == "rock") {
        console.log(result = "Rock beats scissors - you win that round!");
        humanScore++;
    }
    else if (comp == "scissors" && human == "paper") {
        console.log(result = "Scissors beats paper - you lost this one...");
        computerScore++
    }
    else {
        console.log(result = "something went wrong...");
    }

}



while (humanScore < 5 && computerScore < 5) {
    let computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
}
console.log("Game over!");
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);



