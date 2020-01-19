// location of where I want the countdown to be displayed 
var timerLocation = document.querySelector(".countdown-field");
// the button that starts the quiz 
var startButton = document.querySelector(".startBtn");
// container that holds all of your starting stuff
var startingPage = document.querySelector(".starting-container");
// container that holds the questions 
var questionsPage = document.querySelector(".questions-container")
// sets the amount allotted 
var secondsLeft = 60;


startButton.addEventListener("click", function(){
    startTimer();
    startQuestions();
});

function startTimer () {
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerLocation.textContent = "Time Remaining:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            console.log("Game Over");
        }
    }, 1000);
};

function startQuestions(){
    startingPage.classList.add('hide')
    questionsPage.classList.remove('hide')
    // console.log("Im working!")
};