

// then get the user input.
// User will click a button and a modal will show up asking for rock paper or scissors
// then after button is clicked the program will show the computers response and say whether or not they won.
const RPSButton = document.getElementById("RPSButton");
let user;
let winner;
let output = document.getElementById("output");
let finalWinner = document.getElementById("finalWinner");
let compWins;
let userWins;


function playRound(){
    user = window.prompt("Please enter rock, paper, or scissors");
    
    // first step is to take the random input for the computer
    // use Math.random() to create a random number between 0 and 1
    const randomNumber = Math.random() * 100;
    let comp
    // then take that random number and multiply it by 100 then make it so that between 0 and 33 is rock 33 and 66 is paper and 66 to 100 is scissors
    if(randomNumber <= 33){
        comp = "rock";
    }
    else if(randomNumber <= 66){
        comp = "paper";
    }
    else{
        comp = "scissors";
    }
    console.log(comp);
    console.log(user);
    if(comp === user){
    console.log("Tie");
    winner = "Tie";
    output.insertAdjacentHTML("beforeend", "<p>Tie</p>");
    }
    else if(user === "rock" && comp === "scissor"){
        console.log("User wins");
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else if(user === "paper" && comp === "rock"){ 
        console.log("User wins");
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else if(user === "scissors" && comp === "paper"){
        console.log("User wins");
        winner = "User wins ";
        output.insertAdjacentHTML("beforeend", "<p>User wins</p>");
        userWins++
    }
    else{
        console.log("Comnputer wins");
        winner = "Computer wins";
        output.insertAdjacentHTML("beforeend", "<p>Computer wins</p>");
        compWins++
    }

}

function playGame() {
    for(let i = 0; i < 5; i++){
        playRound();
    }
    if(userWins === compWins){
        playRound();
    }
    if(userWins > compWins){
        finalWinner.textContent = "You won best out of five;)";
    }
    else{
        finalWinner.textContent = "Computer won best out of five :(";
    }
}
RPSButton.addEventListener("click", playGame);


// make if else statments comparing their choices using the guide of the rules for the game and simply print out who wins. 
// if user and comp are equal print tie
// if user has better then user wins
// else comp wins



