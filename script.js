// location of where I want the countdown to be displayed 
var timerLocation = document.querySelector(".countdown-field");
// the button that starts the quiz 
var startButton = document.querySelector(".startBtn");
// sets the amount allotted 
var secondsLeft = 60;

function startTimer () {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerLocation.textContent = "Time Remaining:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("Game Over");
        }
    }, 1000);
}

startButton.addEventListener("click", startTimer);