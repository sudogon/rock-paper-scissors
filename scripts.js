const selections = ["pedra", "papel", "tesoura"];

var computerSelection = computerPlay();
var humanScore = 0;
var computerScore = 0;
var isWinner = Boolean;

function computerPlay() {
    let selections = ["pedra", "papel", "tesoura"];
    return selections[Math.floor(Math.random() * selections.length)]; /*  */
}

function playRound() {
    var playerSelection = prompt("Pedra! Papel! Tesoura! Vence quem ganhar 5!");
    let humanPlay = playerSelection.toLowerCase();
    computerSelection = computerPlay();
    result = '';

    if (playerSelection == computerSelection) {
        result = 'É um empate!'
        return isWinner = false;
    } else if ((humanPlay == "pedra" && computerSelection == "tesoura") || 
             (humanPlay == "tesoura" && computerSelection == "papel") || 
             (humanPlay == "papel" && computerSelection == "pedra")) {
        humanScore++;
        result = `${humanScore} - ${computerScore} Você ganhou a rodada! ${playerSelection} vence ${computerSelection}.`;
        return isWinner = true;
        
    } else if ((humanPlay == "tesoura" && computerSelection == "pedra") || 
             (humanPlay == "papel" && computerSelection == "tesoura") || 
             (humanPlay == "pedra" && computerSelection == "papel")) {
        computerScore++;
        result = `${humanScore} - ${computerScore} Você perdeu a rodada. ${playerSelection} perde para ${computerSelection}.`;
        return isWinner = false;

    } else {
        result = "As opções são: pedra, papel ou tesoura.";
        return result;
    }
}

function game () {
    for (let i = 0; i < 20; i++) {        
        playRound(computerSelection);

        if (isWinner === true) {
            console.log(result);
            if (humanScore == 5) {
                console.log(`VOCÊ VENCEU!!! ${humanScore} - ${computerScore}`);
                break;
            }
        } else if (isWinner === false) {
            console.log(result);
            if (computerScore == 5) {
                console.log(`Você perdeu. ${humanScore} - ${computerScore}`);
                break;
        }
        } else {
            console.log(strerror);
        }
    }
}
game();