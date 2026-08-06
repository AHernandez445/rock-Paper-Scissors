// then get the user input.
// User will click a button and a modal will show up asking for rock paper or scissors
// then after button is clicked the program will show the computers response and say whether or not they won.
const RPSButton = document.getElementById("RPSButton");
const Rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let user;
let comp;
let winner;
const output = document.getElementById("output");
const finalWinner = document.getElementById("finalWinner");
let compWins = 0;
let userWins = 0;
let roundCounter = 0;

function getComputerDecision(){
    const randomNumber = Math.random() * 100;
    // then take that random number and multiply it by 100 then make it so 
    // that between 0 and 33 is rock 33 and 66 is paper and 66 to 100 is scissors
    if(randomNumber <= 33){
        comp = "rock";
    }
    else if(randomNumber <= 66){
        comp = "paper";
    }
    else{
        comp = "scissors";
    }
}

function playRound(playerChoice){
    if(roundCounter >= 5){
        if(userWins === compWins){
            return finalWinner.textContent = "TIE!! play again! reload.";
        }
        if(userWins > compWins){
            return finalWinner.textContent = "You won best out of five;)";
        }
        else{
            return finalWinner.textContent = "Computer won best out of five :(";
        }
    }
    // first step is to take the random input for the computer
    // use Math.random() to create a random number between 0 and 1
    getComputerDecision();
    //grab user Choice
    user = playerChoice;
    if(comp === user){
    winner = "Tie";
    output.insertAdjacentHTML("beforeend", "<p>Tie</p>");
    roundCounter++;
    }
    else if(user === "rock" && comp === "scissors"){
        roundCounter++;
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else if(user === "paper" && comp === "rock"){ 
        roundCounter++;
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else if(user === "scissors" && comp === "paper"){
        roundCounter++;
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else{
        roundCounter++;
        winner = "Computer wins";
        output.insertAdjacentHTML("beforeend", "<p>Computer wins</p>");
        compWins++
    }
}
rock.addEventListener("click", () => playRound("rock"));
paper.addEventListener("click", () => playRound("paper"));
scissors.addEventListener("click",() => playRound("scissors"));

// make if else statments comparing their choices using the guide of the rules 
// for the game and simply print out who wins. 
// if user and comp are equal print tie
// if user has better then user wins
// else comp wins