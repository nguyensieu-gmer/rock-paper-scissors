function getHumanChoise(){
    let choice = prompt("let choose one: rock, paper, scissors");
    return choice.toLowerCase();
}

function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log(`Your choice and computer choice are ${humanChoice}, You draw!`);
        return 0;
    }
    else{
        if (humanChoice == "rock"){
            if (computerChoice == "paper"){
                console.log("paper covers rock. You lose!");
                return -1;
            }
            else{
                console.log("rock crashes scissors. You win!");
                return 1;
            }
        }
        else if (humanChoice == "paper"){
            if (computerChoice == "rock"){
                console.log(`paper covers rock. You win!`);
                return 1;
            }
            else {
                console.log(`scissors cuts paper. You lose!`);
                return -1;
            }
        } else {
            if (computerChoice == "rock"){
                console.log(`rock crashes scissors. You lose!`);
                return -1;
            }
            else {
                console.log(`scissors cuts paper. You win!`);
                return 1;
            }
        }
    }
}

function playGame(){
    let humanCore = 0;
    let computerCore = 0;
    let time = 0
    while (time < 5){
        let humanChoice = getHumanChoise();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result == 0){
            humanCore++;
            computerCore++;
        }
        else if (result == 1){
            humanCore++;
        }
        else {
            computerCore++;
        }
        time += 1;
    }
    console.log(`Your core is ${humanCore}`);
    console.log(`computer core is ${computerCore}`);
}

playGame();


