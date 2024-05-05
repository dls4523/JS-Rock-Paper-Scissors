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
    return humanChoice;
}

function compareChoices(comp, human) {
    var result;
    if (comp == "rock" && human == "paper") {
        result = "Congrats - you won!";
    }
    else if (comp == "rock" && human == "scissors") {
        result = "Sorry - you lost!"
    }
    else if (comp == "rock" && human == "rock") {
        result = "Wow - It's a tie!"
    }
    else if (comp == "paper" && human == "paper") {
        result = "Wow - It's a tie!"
    }
    else if (comp == "paper" && human == "rock") {
        result = "Sorry - you lost!"
    }
    else if (comp == "paper" && human == "scissors") {
        result = "Congrats - you won!"
    }
    else if (comp == "scissors" && human == "scissors") {
        result = "Wow - It's a tie!"
    }
    else if (comp == "scissors" && human == "rock") {
        result = "Congrats - you won!"
    }
    else if (comp == "scissors" && human == "paper") {
        result = "Sorry - you list!"
    }
    else {
        result = "something went wrong..."
    }
    return result;
}

let computerPlay = getComputerChoice();
let humanPlay = getHumanChoice();
let result = compareChoices(computerPlay, humanPlay);
console.log("Computer chose:" + computerPlay);
console.log("You chose:" + humanPlay)
console.log(result);



