function randomChoise(){
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

let playerChoice;
let computerChoice;
let choices = document.querySelector(".option");
let playerSymbol = document.querySelector("#player_choice");
let computerSymbol = document.querySelector("#computer_choice");
let playerMeme = document.querySelector("#meme_player");
let computerMeme = document.querySelector("#meme_computer");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let endMessage = document.querySelector("#endMessage");
let restartGame = document.querySelector("#restartGame");
let endgame = document.querySelector("#endgame");

// listener of player option
function responeChoices(e) {
    if (e.target.id === "choice_1"){
        playerChoice = 'rock';
        playerSymbol.src = "./image/rock.png";
    }
    else if (e.target.id === "choice_2"){
        playerChoice = 'paper';
        playerSymbol.src = "./image/paper.png";
    }
    else if (e.target.id === "choice_3"){
        playerChoice = 'scissors';
        playerSymbol.src = "./image/scissors.png"
    } else return;


    computerChoice = randomChoise();
    if (computerChoice === "rock"){
        computerSymbol.src = "./image/rock.png";
    }
    else if (computerChoice === "paper"){
        computerSymbol.src = "./image/paper.png";
    }
    else{
        computerSymbol.src = "./image/scissors.png"
    }

    let result = defineWinner(playerChoice, computerChoice);
    if (result === 0){
        playerMeme.src = "./image/draw.jpg";
        computerMeme.src = "./image/draw.jpg";
    } else if (result === 1){
        playerMeme.src = "./image/winmeme.jpeg";
        computerMeme.src = "./image/losememe.webp"
    }
    else{
        playerMeme.src = "./image/losememe.webp";
        computerMeme.src = "./image/winmeme.jpeg";
    }

    if (result === 1){
        playerScore.textContent = `${Number(playerScore.textContent) + 1}`
    } else if (result === -1){
        computerScore.textContent = `${Number(computerScore.textContent) + 1}`
    }
    checkEndGame();
}

// win return 1; lose return -1; draw return 0
function defineWinner(playerChoice, computerChoice){
    if (playerChoice === computerChoice){
        return 0;
    } else {
        if (playerChoice === 'rock'){
            if (computerChoice === 'paper'){
                return -1;
            }
            else if (computerChoice === 'scissors') {
                return 1;
            }
        }
        else if (playerChoice === 'paper'){
            if (computerChoice === 'rock'){
                return 1;
            }
            else if (computerChoice === 'scissors'){
                return -1;
            }
        }
        else if (playerChoice === 'scissors'){ 
            if (computerChoice === 'paper'){
                return 1;
            }
            else if (computerChoice === 'rock') {
                return -1;
            }
        }
    }
}

function checkEndGame(){
    let p = playerScore.textContent;
    let c = computerScore.textContent;
    if (p === '5' || c === '5'){
        endgame.classList.remove("hidden");

        endMessage.textContent = p === '5' ? "YOU WIN!" : "YOU LOSE!";
        choices.removeEventListener("click", responeChoices);
    }
}

restartGame.addEventListener("click", e => {
    endgame.classList.add("hidden");
    playerMeme.src = "";
    computerMeme.src = "";
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    playerSymbol.src = "./image/rock.png";
    computerSymbol.src = "./image/rock.png";

    choices.addEventListener("click", responeChoices);
});

choices.addEventListener("click", responeChoices);



