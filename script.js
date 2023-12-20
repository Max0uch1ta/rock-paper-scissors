// First get computer choice
function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1)
    if (randomNumber == 1) {
        return "rock"
    } else if (randomNumber == 2){
        return "paper"
    } else {
        return "scissors"
    }
}

function getSelections(){
    let playerSelection = prompt("What is your selection?");
    let computerSelection = getComputerChoice();
    return [playerSelection, computerSelection];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase == computerSelection ) {
        let new_selections = getSelections()
        return playRound(new_selections[0], new_selections[1]);
    }
    if (playerSelection.toLowerCase == "rock")  {
        if (computerSelection ==  "paper") {
            return "lose";
        } else {
            return "win";
        }
    } else if (playerSelection.toLowerCase == "paper") {
        if (computerSelection == "rock") {
            return "win";
        } else {
            return "lose"
        }

    } else {
        if (computerSelection == "rock") {
            return "lose"
        } else {
            return "win"
        }
    }
}

// compare both values to decide who wins
// Call the function created to a game function that plays 5 games

function game() {
    let points = 0
    for (let i = 0; i < 5; i++ ) {
        let selections = getSelections();
        // Get winner with the playRound function
        let result = playRound(selections[0], selections[1]);
        if (result == "win") {
            points += 1
        } else {
            points -=1
        }
        console.log(result)
    }
    if (points > 0) {
        return "You win"
    } else {
        return "You lose"
    }
}

console.log(game())