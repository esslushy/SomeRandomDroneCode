function coinToss(guess){
  var random=Math.random();
  if(random<.5){
    if(guess ==  1){
      console.log("The flip was heads. You win!");
    }else{
      console.log("The flip was heads. I win!");
    }
  }else{
    if(guess ==  2){
      console.log("The flip was tails. You win!");
    }else{
      console.log("The flip was heads. I win!");
    }
  }
}

do{
  var HeadsorTails = prompt("Let's flip a coin. Heads or tails? 1 for heads and 2 for tails.");
  coinToss(HeadsorTails);
  var again = prompt("Do you want to play again? 1 for yes 2 for no.");
  if(again == 1){
    var wantsToPlayAgain=true;
  }else{
    wantsToPlayAgain=false;
  }
}while(wantsToPlayAgain);


