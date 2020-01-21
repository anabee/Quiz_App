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
// display for where the answer will go if the user was wrong or right 
var resultArea = document.querySelector(".result-box");
// this is the page that will allow users to add their initials to the score 
var userResults = document.querySelector(".user-scores");
// this is for the button that saves the users initials 
var saveInitials = document.querySelector(".addintScoreBtn");
// sets the amount allotted 
var secondsLeft = 75;


startButton.addEventListener("click", function(){
    startTimer();
    startQuestions();
    showQuestionsAns1();
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

// QUESTION 1 

function showQuestionsAns1(){
    questionField.textContent = questions[0].title;
    answerOne.textContent = questions[0].choices[0];
    answerTwo.textContent = questions[0].choices[1];
    answerThree.textContent = questions[0].choices[2];
    answerFour.textContent = questions[0].choices[3];

answerOne.addEventListener("click", function(){
    resultArea.classList.remove('hide');
    resultArea.textContent = "Wrong!";
    showQuestionsAns2();
});
answerTwo.addEventListener("click", function(){
    resultArea.classList.remove('hide');
    resultArea.textContent = "Wrong!";
    showQuestionsAns2();
});
answerThree.addEventListener("click", function(){
    resultArea.classList.remove('hide');
    resultArea.textContent = "Right!";
    showQuestionsAns2();
});
answerFour.addEventListener("click", function(){
    resultArea.classList.remove('hide');
    resultArea.textContent = "Wrong!";
    showQuestionsAns2();
});
};

// QUESTION 2 

function showQuestionsAns2(){
    // resultArea.classList.add('hide');
    questionField.textContent = questions[1].title;
    answerOne.textContent = questions[1].choices[0];
    answerTwo.textContent = questions[1].choices[1];
    answerThree.textContent = questions[1].choices[2];
    answerFour.textContent = questions[1].choices[3];

answerOne.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns3();
});
answerTwo.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns3();
});
answerThree.addEventListener("click", function(){
    resultArea.textContent = "Right!"
    resultArea.classList.remove('hide');
    showQuestionsAns3();
});
answerFour.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns3();
});
};

// QUESTION 3 

function showQuestionsAns3(){
    // resultArea.classList.add('hide');
    questionField.textContent = questions[2].title;
    answerOne.textContent = questions[2].choices[0];
    answerTwo.textContent = questions[2].choices[1];
    answerThree.textContent = questions[2].choices[2];
    answerFour.textContent = questions[2].choices[3];

answerOne.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns4();
});
answerTwo.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns4();
});
answerThree.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns4();
});
answerFour.addEventListener("click", function(){
    resultArea.textContent = "Right!"
    resultArea.classList.remove('hide');
    showQuestionsAns4();
});
};

// QUESTION 4 

function showQuestionsAns4(){
    // resultArea.classList.add('hide');
    questionField.textContent = questions[3].title;
    answerOne.textContent = questions[3].choices[0];
    answerTwo.textContent = questions[3].choices[1];
    answerThree.textContent = questions[3].choices[2];
    answerFour.textContent = questions[3].choices[3];

answerOne.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns5();
});
answerTwo.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns5();
});
answerThree.addEventListener("click", function(){
    resultArea.textContent = "Right!"
    resultArea.classList.remove('hide');
    showQuestionsAns5();
});
answerFour.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    showQuestionsAns5();
});
};

// QUESTION 5 

function showQuestionsAns5(){
    // resultArea.classList.add('hide');
    questionField.textContent = questions[4].title;
    answerOne.textContent = questions[4].choices[0];
    answerTwo.textContent = questions[4].choices[1];
    answerThree.textContent = questions[4].choices[2];
    answerFour.textContent = questions[4].choices[3];

answerOne.addEventListener("click", function(){
    resultArea.textContent = "Right!"
    resultArea.classList.remove('hide');
    yourScorePage();
});
answerTwo.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    yourScorePage();
});
answerThree.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    yourScorePage();
});
answerFour.addEventListener("click", function(){
    resultArea.textContent = "Wrong!"
    resultArea.classList.remove('hide');
    yourScorePage();
});
};

function yourScorePage () {
    userResults.classList.remove('hide');
    questionsPage.classList.add('hide');
};


function highScores (){

};