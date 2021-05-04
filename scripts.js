const selections = ["rock", "paper", "scissor"];
const playerSelection = prompt("ROCK! PAPERS! SCISSORS! ");
const computerSelection = computerPlay();

function computerPlay() {
    return selections[Math.floor(Math.random() * selections.length)]; /*  */
}

function playRound(playerSelection, computerSelection) {
    let humanPlay = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    } else if (humanPlay === "rock" && computerSelection === "scissor") {
        console.log("YOU WON!");
    } else if (humanPlay === "scissor" && computerSelection === "paper") {
        console.log("YOU WON!");
    } else if (humanPlay === "paper" && computerSelection === "rock") {
        console.log("YOU WON!");
    } else if (humanPlay === "scissor" && computerSelection === "rock") {
        console.log("You lost.");
    } else if (humanPlay === "paper" && computerSelection === "scissor") {
        console.log("You lost.");
    } else if (humanPlay === "rock" && computerSelection === "paper") {
        console.log("You lost.");
    } else {
        console.log("The options are: rock, paper or scissor.")
    }
}
