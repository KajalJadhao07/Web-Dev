const favMovie = "rockstar";

let guess = prompt("guess my favourite movie or quit the game");

while((guess!=favMovie)&&(guess!="quit")){
    guess = prompt("Wrong guess!! Please try again.");
}

if(guess==favMovie){
    console.log("you guessed it correct.");
}
else if(guess=="quit"){
    console.log("You quit.");
}
