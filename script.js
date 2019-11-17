let computadoraDecisiones = ["rock","paper","scissors"];
let CPUScore=0;
let PlayerScore=0;
function computerPlay(){
let randomNumber=Math.floor(Math.random()*3);

return computadoraDecisiones[randomNumber];
}
function playRound(playerSelection) {
  computerSelection=computerPlay();
	playerSelection=playerSelection.toLowerCase();
  if(playerSelection=="rock"){
    if (computerSelection=="rock"){
      return "I choose rock!draw, you are lucky";
    }
    if (computerSelection=="paper"){
      CPUScore=CPUScore+1;
      return "I choose paper!I win!!! better luck next time";
      
    }
    else{
      PlayerScore=PlayerScore+1;
      return "I choose scissors!You win this time";

    }
  }
  if(playerSelection=="paper"){
    if (computerSelection=="rock"){
      PlayerScore=PlayerScore+1;
      return "I choose rock!You win this time";
    }
    if (computerSelection=="paper"){
      return "I choose paper!draw, you are lucky";
    }
    else{
      CPUScore=CPUScore+1;
      return "I choose scissors!I win!!! better luck next time";
    }
  }
  if(playerSelection=="scissors"){
    if (computerSelection=="rock"){
      CPUScore=CPUScore+1;
      return "I choose rock!I win!!! better luck next time";
    }
    if (computerSelection=="paper"){
      PlayerScore=PlayerScore+1;
      return "I choose paper!You win this time";
    }
    else{
      return "I choose scissors!draw, you are lucky";
    }
  }  
}
function game(){

if (CPUScore==3){
  return("I win!!, come back when you are better");
}
else{
  return("You had luck, next time i will win");
}
}
document.getElementById("rock").addEventListener("click", function(){
  document.getElementById("cpuComments").innerHTML =playRound("rock");
  document.getElementById("playerScore").innerHTML = PlayerScore;
  document.getElementById("cpuScore").innerHTML = CPUScore;
  if(CPUScore==3 || PlayerScore == 3 ){
    document.getElementById("cpuComments").innerHTML =game();
    CPUScore=0;
    PlayerScore=0;
  }
  
  });
  document.getElementById("paper").addEventListener("click", function(){
    document.getElementById("cpuComments").innerHTML =playRound("paper");
    document.getElementById("playerScore").innerHTML = PlayerScore;
    document.getElementById("cpuScore").innerHTML = CPUScore;
    if(CPUScore==3 || PlayerScore == 3 ){
      document.getElementById("cpuComments").innerHTML =game();
      CPUScore=0;
      PlayerScore=0;
    }
  });
  document.getElementById("scissors").addEventListener("click", function(){
    document.getElementById("cpuComments").innerHTML =playRound("scissors");
    document.getElementById("playerScore").innerHTML = PlayerScore;
    document.getElementById("cpuScore").innerHTML = CPUScore;
    if(CPUScore==3 || PlayerScore == 3 ){
      document.getElementById("cpuComments").innerHTML =game();
      CPUScore=0;
      PlayerScore=0;
    }
  });
  

