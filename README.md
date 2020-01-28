# Quiz_App
Quiz application 

For this quiz, I initally tried to filter through questions in order to get the quiz going. Unfortunately after seeing that the button clicks would run multiple functions I decided to just make new buttons for every question. This allowed me to go theough and make sure that each button only started one function. 

In order to deduct points from the timer, I made a variable which I could use through out my JS file. When I tested the answer for a question, I would decut points if the answer was wrong. 

The page then takes you to a page where you can enter your initials and then save them to a scoreboard. 


PSEUDO CODE 
1. create basic html that will create all of the elements we need 
- Elements we need: 
    nav bar which will hold the highest score on the left and the timer on the right 
    container that will hold the heading, a p tag for an explanation, and a button that allows the user to start
    a div that will hold the questions 
    a div that will hold and ul of buttons that will contain our answers to the questions 
    a div that will alert the user whether they have guessed the question correctly
    a div that will hold an "All done" message 
    a div that will hold the score. 
    a div that will allow the user to eneter their initials 

    create the questios on a seperate js file 

2. JS 
give our "Start" button functionality so that it can start our game
    the start button has to do two things: 
    - it has to start the timer 
    - has to start the displaying of questions 

figure out ho to display the questions from the array 
    -link the appropriate question to the question div - append? textContent?
    -link the buttons to the available answers 

write a function that will alert the user whether they chose the right answer 
    -make the buttons functional so that the user can click and choose their answer 
    -alert the user on whether they are right or wrong 

    !!! -if they chose the right answer then we have to save that point somehow 
    !!!-if they chose the wrong answer we need to deduct time from the clock (15 secs)

make it so that when an answer is chosen, the screen shows the next question and answer

    !!! - figure out how to clear the wrong/ right field once an question is answered 

once the user completes the quiz, take user to the page that shows their score 
