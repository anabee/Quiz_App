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
var resultAreaW = document.querySelector(".wrong-display");
// this is the page that will allow users to add their initials to the score 
var userResults = document.querySelector(".user-scores");
// this is for the button that saves the users initials 
var saveInitials = document.querySelector(".addingScoreBtn");
// high scores page 
var highScoresPage = document.querySelector(".high-scores");
// button that allows user to restart the game 
var restart = document.querySelector(".restartBtn");
// button to clear local storage 
var clearBoard = document.querySelector(".clearAll")

var userNameSpan = document.querySelector(".winner-info");


startButton.addEventListener("click", function () {
    // start();
    // startCount();
    // startTimer();
    startQuestions();
    showQuestionsAns1();
});

// var secondsLeft

// function start() {
//     secondsLeft = 3

//     setInterval(function () {getSecondsLeft(secondsLeft)}, 1000)

//     function getSecondsLeft(seconds) {
//         timerLocation.textContent = "Time Remaining: " + secondsLeft;
//         secondsLeft = seconds-1

//         if(secondsLeft === 0){console.log('End Game')}

//         return secondsLeft  
//     }
// };



// QUESTION FUNCTIONS 

function startQuestions() {
    startingPage.classList.add('hide')
    questionsPage.classList.remove('hide')
    // console.log("Im working!")
};

// QUESTION 1 

var indexOfAns
var indexOfAns1
var indexOfAns2
var indexOfAns3
var indexOfAns4
var index

function checkAns(){
    if (index != indexOfAns){
        // console.log(index);
        // console.log(indexOfAns);
        resultAreaW.classList.remove('hide');
        resultAreaW.textContent = "Wrong!"
        console.log("wrong")
    } else {
        resultAreaW.classList.remove('hide');
        resultAreaW.textContent = "Right!"
        console.log("right")
    };
 };

function showQuestionsAns1() {
    questionField.textContent = questions[0].title;
    answerOne.textContent = questions[0].choices[0];
    answerTwo.textContent = questions[0].choices[1];
    answerThree.textContent = questions[0].choices[2];
    answerFour.textContent = questions[0].choices[3];

    function correctOne(questions){
        let numberOne = questions[0];

        index = numberOne.choices.indexOf(numberOne.answer);

        console.log(index);
    };
    

         answerOne.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[0]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });
    
        answerTwo.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[1]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });

        answerThree.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[2]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });

        answerFour.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[3]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });
    };
      

// QUESTION 2 

function showQuestionsAns2() {
    // resultAreaW.classList.add('hide');
    questionField.textContent = questions[1].title;
    answerOne.textContent = questions[1].choices[0];
    answerTwo.textContent = questions[1].choices[1];
    answerThree.textContent = questions[1].choices[2];
    answerFour.textContent = questions[1].choices[3];

    function checkAns1(){
        if (index != indexOfAns1){
            // console.log(index);
            // console.log(indexOfAns);
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            console.log("wrong")
        } else {
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Right!"
            console.log("right")
        };
     };
    
    function correctTwo(questions){
        let numberTwo = questions[1];
    
        index = numberTwo.choices.indexOf(numberTwo.answer);
    
        console.log(index);
    };
    
    answerOne.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[0]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    answerTwo.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[1]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    answerThree.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[2]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    answerFour.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[3]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
};


// // QUESTION 3 

function showQuestionsAns3() {
    // resultAreaW.classList.add('hide');
    // resultAreaR.classList.add('hide');
    questionField.textContent = questions[2].title;
    answerOne.textContent = questions[2].choices[0];
    answerTwo.textContent = questions[2].choices[1];
    answerThree.textContent = questions[2].choices[2];
    answerFour.textContent = questions[2].choices[3];

    function checkAns2(){
        if (index != indexOfAns2){
            // console.log(index);
            // console.log(indexOfAns);
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            console.log("wrong")
        } else {
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Right!"
            console.log("right")
        };
     };
    
    function correctThree(questions){
        let numberThree = questions[2];
    
        index = numberThree.choices.indexOf(numberThree.answer);
    
        console.log(index);
    };
    
    answerOne.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[0]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    answerTwo.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[1]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    answerThree.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[2]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    answerFour.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[3]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
};


// // QUESTION 4 

function showQuestionsAns4() {
    // resultAreaW.classList.add('hide');
    // resultAreaR.classList.add('hide');
    questionField.textContent = questions[3].title;
    answerOne.textContent = questions[3].choices[0];
    answerTwo.textContent = questions[3].choices[1];
    answerThree.textContent = questions[3].choices[2];
    answerFour.textContent = questions[3].choices[3];

    function checkAns3(){
        if (index != indexOfAns3){
            // console.log(index);
            // console.log(indexOfAns);
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            console.log("wrong")
        } else {
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Right!"
            console.log("right")
        };
     };
    
    function correctFour(questions){
        let numberFour = questions[3];
    
        index = numberFour.choices.indexOf(numberFour.answer);
    
        console.log(index);
    };
    
    answerOne.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[0]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    answerTwo.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[1]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    answerThree.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[2]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    answerFour.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[3]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
};


// // QUESTION 5 

function showQuestionsAns5() {
    // resultAreaW.classList.add('hide');
    // resultAreaR.classList.add('hide');
    questionField.textContent = questions[4].title;
    answerOne.textContent = questions[4].choices[0];
    answerTwo.textContent = questions[4].choices[1];
    answerThree.textContent = questions[4].choices[2];
    answerFour.textContent = questions[4].choices[3];

    function checkAns4(){
        if (index != indexOfAns4){
            // console.log(index);
            // console.log(indexOfAns);
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            console.log("wrong")
        } else {
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Right!"
            console.log("right")
        };
     };
    
    function correctFive(questions){
        let numberFour = questions[4];
    
        index = numberFour.choices.indexOf(numberFour.answer);
    
        console.log(index);
    };
    
    answerOne.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[0]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    answerTwo.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[1]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    answerThree.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[2]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    answerFour.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[3]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
};

function yourScorePage() {
    userResults.classList.remove('hide');
    questionsPage.classList.add('hide');
};



saveInitials.addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.querySelector("#name-win").value;
    
    localStorage.setItem('winner', userName);

    userResults.classList.add('hide');
    highScoresPage.classList.remove('hide');
    scoreBoard();
});

function scoreBoard (){
    console.log(localStorage.getItem('winner'))
    userNameSpan.textContent = localStorage.getItem('winner');
};


restart.addEventListener("click", function () {
    highScoresPage.classList.add('hide');
    startingPage.classList.remove('hide');
});

clearBoard.addEventListener("click", function(){
    localStorage.clear();
    userNameSpan.classList.add('hide');
});