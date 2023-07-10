console.log('HI U ARE WELL COME TO ROCK, SCISSOR, PAPER GAME');
const options = ["rock", "paper", "scissors"];

 function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * 3)];
    return(choice);
} 
 function checkWinner(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    }
    else if((playerSelection == "rock" && computerSelection == "scissors") ||
           (playerSelection == "scissors" && computerSelection == "papper") ||
           (playerSelection == "paper" && computerSelection == "rock")){
            return "player";
    }
    else {
        return "computer";
    }
 }
 function playRound(playerSelection,computerSelection){
      const result = checkWinner(playerSelection,computerSelection);
   if(result == "tie"){
      return"it is tie";
   }
   else if (result == "player"){
      return `You win! ${playerSelection} beats ${computerSelection}`;
   }
   else{
      return`You loose ${computerSelection} beats ${playerSelection}`;
   }
 }
 function playerChoice(){
     let input = false;
   while (input == false){
     const userChoice = prompt("choose amomg rock, paper, sccissors and enjoy the game");
   if (userChoice == null){
      continue;
   }
      const userChoiceInLower = userChoice.toLowerCase();
   if(options.includes(userChoiceInLower)){
      input = true;
      return userChoiceInLower;
   }
   }
 }
 function game(){
   let scoreOfPlayer = 0;
   let scoreOfComputer = 0;
   for(let i=0; i<5; i++){
      const playerSelection = playerChoice();
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection,computerSelection));
      console.log("=======================");
   if(checkWinner(playerSelection,computerSelection) == "player"){
      scoreOfPlayer++;
   }
   else if(checkWinner(playerSelection,computerSelection) == "computer"){
      scoreOfComputer++;
   }
   }
    console.log("game over!! and it's soo sweet");
   if(scoreOfPlayer>scoreOfComputer){
     console.log("player win!!!");
   }
   else if (scoreOfPlayer<scoreOfComputer){
      console.log("computer win!!!");
   }
   else{
   console.log("It is tie");
   }
  }
 game();
