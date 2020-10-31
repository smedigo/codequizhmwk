setInterval to the "timed" functionallity

clearInterval to stop the timeout

VAR currentScore/timeLeft

VAR questions - Array

VAR pointer/index - Current position in the question array

* VAR startButton

var questions = [
     {
     //Question text
     //List of question answers
     // Corrct answer
     answer:"correct";
     }

]




GIVEN I am taking a code quiz
WHEN I click the start button
fucntion startGame() {


}

WHEN I click the 'start button'
'start button'.addEventListener("click". startGame);




THEN a timer starts and I am presented with a question

* Set a timer score =75
// Start the interval to begin the score countdown

* Present the question= create new HTML elemnts for my question content


>Set the #question div's innerHTML="";
> Append a h2 for the question text
>Append a new button for each choice

>var button=document.createElement("button);
>button.textContent=questiontext;
>button.setAttribute(data-choice");

WHEN I answer a question

* WHEN user clicks one of my answers buttons

THEN I am presented with another question

* increase our pointer by 1
* Present the next question


WHEN I answer a question incorrectly

event.target.matches("button")      check the bubbling event

    > var clickButtonContent=event.target.textContent;
    > var clickButtonValue=event.target.getAttribute("data-choice',questionText);

    > The question is correct with clickButtonValue==question[0].answer

THEN time is subtracted from the clock

> Subtract points from my current score



WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score