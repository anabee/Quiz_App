
function start() {
    var secondsLeft = 75



    setInterval(function () {getSecondsLeft(secondsLeft)}, 1000)


    function getSecondsLeft(seconds) {
        secondsLeft = seconds-1

        if(secondsLeft === 0){console.log('End Game')}

        return secondsLeft  

    }


}


// function getQuestion(questions){

//     let question = questions[1]

//    var index = question.choices.indexOf(question.answer)

//     console.log(index);
// }
// getQuestion(questions)
// start()

// timer stuff 

// var seconds = 75;

// var getSecondsLeft = function(seconds) {
//     setTimeout(() => {
//         console.log(seconds)

//     }, seconds)

// }

// getSecondsLeft(seconds);

// function deductTime(){
//         seconds = seconds - 15;
//         console.log(seconds);
// };



// INTERVAL FUNCTION 
// var secondsLeft = 50

// function startTimer() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timerLocation.textContent = "Time Remaining:" + secondsLeft;

//         if (answer = true){
//             secondsLeft = secondsLeft-15;
            
//         }else if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             yourScorePage();
//             console.log("Game Over");
//         }
//     }, 1000);
// };

// TIMER FUNCTIONS 

// var secondsLeft = 75;
// var time;
// var timer_is_on = 0;

// function timedCount() {
//     document.getElementById("txt").textContent = "Time Remaining: " + secondsLeft;
//     secondsLeft = secondsLeft - 1;
//     t = setTimeout(timedCount, 1000);
// };

// function startCount() {
//     if (!timer_is_on) {
//         timer_is_on = 1;
//         timedCount();
//     }
// };

// function deductTime() {
//     clearTimeout(t);
//     timer_is_on = 0
//     secondsLeft = secondsLeft - 15;
//     console.log(secondsLeft);
// };

// function endingTime() {
//     clearTimeout(t);
//     timer_is_on = 0
//     secondsLeft = secondsLeft;
//     console.log(secondsLeft);
//   };

// function stopTimer(){
//     if(secondsLeft <= 0){
//         clearTimeout(t);
//         timer_is_on = 0;
//         document.getElementById("txt").textContent = "Time Remaining: " + 0;
//         console.log("Im working?");
//         yourScorePage();
//     }
// };
