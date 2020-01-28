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
var clearBoard = document.querySelector(".clearAll");

var yourFinalScore = document.querySelector(".final-score");

var userNameSpan = document.querySelector(".winner-info");


startButton.addEventListener("click", function () {
    startTimer();
    startQuestions();
    showQuestionsAns1();
});


var secondsLeft 
var timerInterval
var saveTimeEnd 


function startTimer() {
    secondsLeft = 75 
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerLocation.textContent = secondsLeft;
        saveTimeEnd = secondsLeft;
        yourFinalScore.textContent = saveTimeEnd;
            
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            yourScorePage();
            timerLocation.textContent = 0;
            console.log("Game Over");
        }
    }, 1000);
};



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
        secondsLeft = secondsLeft -15
        console.log("wrong")
    } else {
        resultAreaW.classList.remove('hide');
        resultAreaW.textContent = "Right!"
        console.log("right")
    };
 };

function showQuestionsAns1() {
    questionField.textContent = questions[0].title;

    function correctOne(questions){
        let numberOne = questions[0];

        index = numberOne.choices.indexOf(numberOne.answer);

        console.log(index);
    };

    var button1 = document.createElement("button");
        button1.textContent = questions[0].choices[0];
    var button2 = document.createElement("button");
        button2.textContent = questions[0].choices[1];
    var button3 = document.createElement("button");
        button3.textContent = questions[0].choices[2];
    var button4 = document.createElement("button");
        button4.textContent = questions[0].choices[3];

    questionField.append(button1);
    questionField.append(button2);
    questionField.append(button3);
    questionField.append(button4);

    
         button1.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[0]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });

    
        button2.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[1]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });

        button3.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[2]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });

        button4.addEventListener("click", function(){
            correctOne(questions);
            indexOfAns = questions[0].choices.indexOf(questions[0].choices[3]);
            console.log(indexOfAns);
            checkAns();
            showQuestionsAns2();
        });
    };
      

// QUESTION 2 

function showQuestionsAns2() {
    questionField.textContent = questions[1].title;

    function checkAns1(){
        if (index != indexOfAns1){
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            secondsLeft = secondsLeft -15
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

    var button5 = document.createElement("button");
        button5.textContent = questions[1].choices[0];
    var button6 = document.createElement("button");
        button6.textContent = questions[1].choices[1];
    var button7 = document.createElement("button");
        button7.textContent = questions[1].choices[2];
    var button8 = document.createElement("button");
        button8.textContent = questions[1].choices[3];

    questionField.append(button5);
    questionField.append(button6);
    questionField.append(button7);
    questionField.append(button8);

    
    button5.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[0]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    button6.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[1]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    button7.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[2]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
    
    button8.addEventListener("click", function(){
        correctTwo(questions);
        indexOfAns1 = questions[1].choices.indexOf(questions[1].choices[3]);
        console.log(indexOfAns1);
        checkAns1();
        showQuestionsAns3();
    });
};


// // QUESTION 3 

function showQuestionsAns3() {
    questionField.textContent = questions[2].title;

    function checkAns2(){
        if (index != indexOfAns2){
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            secondsLeft = secondsLeft -15
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

    var button9 = document.createElement("button");
        button9.textContent = questions[2].choices[0];
    var button10 = document.createElement("button");
        button10.textContent = questions[2].choices[1];
    var button11 = document.createElement("button");
        button11.textContent = questions[2].choices[2];
    var button12 = document.createElement("button");
        button12.textContent = questions[2].choices[3];

    questionField.appendChild(button9);
    questionField.appendChild(button10);
    questionField.appendChild(button11);
    questionField.appendChild(button12);
    
    button9.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[0]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    button10.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[1]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    button11.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[2]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
    button12.addEventListener("click", function(){
        correctThree(questions);
        indexOfAns2 = questions[2].choices.indexOf(questions[2].choices[3]);
        console.log(indexOfAns2);
        checkAns2();
        showQuestionsAns4();
    });
    
};


// // QUESTION 4 

function showQuestionsAns4() {
    questionField.textContent = questions[3].title;

    function checkAns3(){
        if (index != indexOfAns3){
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            secondsLeft = secondsLeft -15
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

    var button13 = document.createElement("button");
        button13.textContent = questions[3].choices[0];
    var button14 = document.createElement("button");
        button14.textContent = questions[3].choices[1];
    var button15 = document.createElement("button");
        button15.textContent = questions[3].choices[2];
    var button16 = document.createElement("button");
        button16.textContent = questions[3].choices[3];

    questionField.appendChild(button13);
    questionField.appendChild(button14);
    questionField.appendChild(button15);
    questionField.appendChild(button16);
    
    button13.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[0]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    button14.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[1]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    button15.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[2]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
    
    button16.addEventListener("click", function(){
        correctFour(questions);
        indexOfAns3 = questions[3].choices.indexOf(questions[3].choices[3]);
        console.log(indexOfAns3);
        checkAns3();
        showQuestionsAns5();
    });
};


// // QUESTION 5 

function showQuestionsAns5() {
    questionField.textContent = questions[4].title;

    function checkAns4(){
        if (index != indexOfAns4){
            resultAreaW.classList.remove('hide');
            resultAreaW.textContent = "Wrong!"
            console.log("wrong")
            secondsLeft = secondsLeft -15
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

    var button17 = document.createElement("button");
        button17.textContent = questions[4].choices[0];
    var button18 = document.createElement("button");
        button18.textContent = questions[4].choices[1];
    var button19 = document.createElement("button");
        button19.textContent = questions[4].choices[2];
    var button20 = document.createElement("button");
        button20.textContent = questions[4].choices[3];

    questionField.appendChild(button17);
    questionField.appendChild(button18);
    questionField.appendChild(button19);
    questionField.appendChild(button20);
    
    button17.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[0]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    button18.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[1]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    button19.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[2]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
    
    button20.addEventListener("click", function(){
        correctFive(questions);
        indexOfAns4 = questions[4].choices.indexOf(questions[4].choices[3]);
        console.log(indexOfAns4);
        checkAns4();
        yourScorePage();
    });
};


function yourScorePage() {
    clearInterval(timerInterval);
    userResults.classList.remove('hide');
    questionsPage.classList.add('hide');
};

var currentUserScore

saveInitials.addEventListener("click", function (event) {
    event.preventDefault();
    var userName = document.querySelector("#name-win").value;
    currentUserScore = saveTimeEnd;
    
    localStorage.setItem('winner', JSON.stringify(userName));
    localStorage.setItem('winner-score', currentUserScore);

    userResults.classList.add('hide');
    highScoresPage.classList.remove('hide');
    scoreBoard();
});

function scoreBoard (){
    console.log(localStorage.getItem('winner'))
    userNameSpan.textContent = localStorage.getItem('winner') +" - "+ localStorage.getItem('winner-score');
};


restart.addEventListener("click", function () {
    secondsLeft = 0;
    timerLocation.textContent = "";
    highScoresPage.classList.add('hide');
    startingPage.classList.remove('hide');
});

clearBoard.addEventListener("click", function(){
    localStorage.clear();
    userNameSpan.classList.add('hide');
});