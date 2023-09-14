let secretnumber = Math.floor(Math.random()*100) +1;

let guessinput = document.getElementById("guess");

let message = document.getElementById("message");

function checkguess() {
    let guess = parseInt(guessinput.value);

    if(guess === secretnumber){
        message.innerHTML="Congratulations! You guesses the secret number!";
        message.style.color = "green";
    }

    else if(guess < secretnumber){
        message.innerHTML = "Too Low , try again."
        message.style.color = "red";
    }

    else if(guess > secretnumber){
        message.innerHTML = "Too High , try again.";
        message.style.color = "red";
    }
}

// resetgame function is called when users clicks the reset button  
function resetgame(){
    secretnumber = Math.floor(Math.random()*100) +1;
    guessinput.value = "";
    message.innerHTML = "";
}
