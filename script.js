var index = 0;
var count = 30;
var interval = setInterval(function () {
    document.getElementById('count').innerHTML = count;
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
        alert("You're out of time!");
        document.getElementById("container-questions").classList.add("hide");
        document.getElementById("container-submit").classList.remove("hide");
    }

    if (index===questionsArray.length) {
    clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
        alert("You are done!");
        document.getElementById("container-questions").classList.add("hide");
        document.getElementById("container-submit").classList.remove("hide");
    }
}, 1000);

var leaderboard =  JSON.parse(localStorage.getItem('storage')) || [];

 
var questionsArray = [
     {
     title: "What are Variables in JavaScript?",
     optA: "A container that stores vaule",
    optB: "B values",
    optC: "C function",
     optD: "D array",
     correctAnswer: "A container that stores vaule",
 },
  {
     title: "What are Values in JavaScript?",
    optA: "A special characters",
    optB: "B true or false statements",
     optC: "C documents",
     optD: "D variables",
     correctAnswer: "B true or false statements",
 },
 {
     title: "What is a function in JavaScript?",
     optA: "A function is a loop",
     optB: "B function is a type of condition",
     optC: "C function is small factory within the array that stores a code and it acts when it is called",
     optD: "D function is prompt",
     correctAnswer: "C function is small factory within the array that stores a code and it acts when it is called"
 }

]


generateQuestion();



function generateQuestion () {

    document.querySelector(".Question").innerHTML = questionsArray[index].title;
     document.querySelector(".btnOption1").innerHTML = questionsArray[index].optA;
     document.querySelector(".btnOption2").innerHTML = questionsArray[index].optB;
     document.querySelector(".btnOption3").innerHTML = questionsArray[index].optC;
     document.querySelector(".btnOption4").innerHTML = questionsArray[index].optD;

}


var answerbuttons = document.querySelectorAll(".answerbutton")

for (let i = 0; i < answerbuttons.length ; i++) {
    const element = answerbuttons[i];

    element.addEventListener("click", function(event){

    var clickvalue = event.target.innerHTML

    if (clickvalue != questionsArray[index].correctAnswer) {
     
    count -= 10;

    }

    index ++;

    generateQuestion()



       })
    
}

document.getElementById("submitbutton").addEventListener("click", function(){

    var userScore = {
        initals: document.getElementById("initialsId").value,
        score: count,
    }

    leaderboard.push(userScore);

    localStorage.setItem("storage", JSON.stringify(leaderboard));

    console.log(localStorage);

    setTimeout(function() {

        document.getElementById("container-submit").classList.add("hide");
        document.getElementById("container-highScore").classList.remove("hide");


    }, 500);

    for (let i = 0; i < leaderboard.length; i++) {
        const users = leaderboard[i];

        var Li = document.createElement("li");

       Li.innerText=users.initals + " " + users.score;
       document.getElementById("highScore").appendChild(Li);

        
    }
        
    }

);

