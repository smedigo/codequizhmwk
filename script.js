
var count = 30;
var interval = setInterval(function () {
    document.getElementById('count').innerHTML = count;
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
        alert("You're out of time!");
    }
}, 1000);

 //var containerquestions="";
   // document.getElementById("containerquestions").onclick = function() { 
   // document.getElementById("containerquestions").style.display = "none"; 
   // document.getElementById("Question").innerHTML="";
 //} 

 



var question1 = {
    title: "What are Variables in JavaScript?",
    optA: "A container that stores vaule",
    optB: "B values",
    optC: "C function",
    optD: "D array",
    correctAnswer: "A"
}
var question2 = {
    title: "What are Values in JavaScript?",
    optA: "A special characters",
    optB: "B true or false statements",
    optC: "C documents",
    optD: "D variables",
    correctAnswer: "B"
}
var question3 = {
    title: "What is a function in JavaScript?",
    optA: "A function is a loop",
    optB: "B function is a type of condition",
    optC: "C function is small factory within the array that stores a code and it acts when it is called",
    optD: "D function is prompt",
    correctAnswer: "C"
}

document.querySelector("#Question").innerHTML = question1.title;
document.querySelector(".btnOption1").innerHTML = question1.optA;
document.querySelector(".btnOption2").innerHTML = question1.optB;
document.querySelector(".btnOption3").innerHTML = question1.optC;
document.querySelector(".btnOption4").innerHTML = question1.optD;

document.querySelector("#Question").innerHTML = question2.title;
document.querySelector(".btnOption1").innerHTML = question2.optA;
document.querySelector(".btnOption2").innerHTML = question2.optB;
document.querySelector(".btnOption3").innerHTML = question2.optC;
document.querySelector(".btnOption4").innerHTML = question2.optD;

document.querySelector("#Question").innerHTML = question3.title;
document.querySelector(".btnOption1").innerHTML = question3.optA;
document.querySelector(".btnOption2").innerHTML = question3.optB;
document.querySelector(".btnOption3").innerHTML = question3.optC;
document.querySelector(".btnOption4").innerHTML = question3.optD;




document.querySelector(".btnOption1").onclick = function () {
    //alert("Correct!")
    if (document.querySelector("#Question").innerHTML == question1.title) {
        alert("Correct!")
        document.querySelector("#Question").innerHTML = question2.title
    }
    else if (document.querySelector("#Question").innerHTML == question2.title) {

        document.querySelector("#Question").innerHTML = question3.title
    }

}
document.querySelector(".btnOption2").onclick = function () {
    alert("wrong")

    document.querySelector("#Question").innerHTML = question2.title
    document.querySelector("#Question").innerHTML = question3.title

    document.querySelector(".btnOption3").onclick = function () {
        alert("wrong")
        document.querySelector("#Question").innerHTML = question2.title
        document.querySelector("#Question").innerHTML = question3.title
    }
    document.querySelector(".btnOption4").onclick = function () {
        alert("wrong")
        document.querySelector("#Question").innerHTML = question2.title
        document.querySelector("#Question").innerHTML = question3.title
    }
}