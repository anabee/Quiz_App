// location of where I want the countdown to be displayed 
var timerLocation = document.querySelector(".countdown-field");
// the button that starts the quiz 
var startButton = document.querySelector(".startBtn");
// container that holds all of your starting stuff
var startingPage = document.querySelector(".starting-container");
// container that holds the questions 
var questionsPage = document.querySelector(".questions-container");
// element that will hold the question we give it 
var questionField = document.querySelector(".question");
// targetting the individual buttons for the answers
var answerOne = document.querySelector(".buttonOne");
var answerTwo = document.querySelector(".buttonTwo");
var answerThree = document.querySelector(".buttonThree");
var answerFour = document.querySelector(".buttonFour");
// sets the amount allotted 
var secondsLeft = 60;


startButton.addEventListener("click", function(){
    startTimer();
    startQuestions();
    showQuestionsAns();
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

function showQuestionsAns(){
    questionField.textContent = questions[0].title;
    answerOne.textContent = questions[0].choices[0];
    answerTwo.textContent = questions[0].choices[1];
    answerThree.textContent = questions[0].choices[2];
    answerFour.textContent = questions[0].choices[3];
};

function recordingAnswers (){
    
}