function randomChoise(){
    return Math.floor(Math.random() * 3);
}

let playerChoice;
let computerChoice;
let choices = document.querySelector(".option");
choices.addEventListener("click", e => {
    if (e.target.id === "choice_1"){
        playerChoice = 0;
    }
    else if (e.target.id === "choice_2"){
        playerChoice = 1;
    }
    else{
        playerChoice = 2;
    }
    computerChoice = randomChoise();

    console.log(computerChoice)
    console.log(playerChoice);
});


