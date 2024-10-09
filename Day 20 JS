const max = prompt("Enter the maximum number");

const random = Math.ceil(Math.random()); 

let guess = prompt("Guess the number");

while(true){
    if (guess=="quit"){
        console.log("You Quit");
        break;
    }

    else if (guess < random){
        guess = prompt("Hint: The number is small and you are too close");
    }

    else if(guess==random){
        console.log("Congrats !! Your guess is correct that is " , random );
        break;
    }
    
    else {
            guess = prompt("Hint: The number is large and you are too close");
        }
    }
