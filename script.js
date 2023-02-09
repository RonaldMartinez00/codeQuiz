var secondsleft = 90 
var introMessage = document.getElementById("intro")
var quiz = document.getElementById("quiz")
var timer = document.getElementById("timeleft")
var score = document.getElementById("score")
var startButton = document.getElementById("startButton")
var nextButton = document.getElementById("nextButton")
var question = document.getElementById("question")
var answerlist = document.getElementsByClassName ('answer')
var answer1 = document.getElementById("answer1")
var answer2 = document.getElementById("answer2")
var answer3 = document.getElementById("answer3")
var answer4 = document.getElementById("answer4")
var endgame = document.getElementById("endgame")
var questionNum = 1


// starts the quiz and displays the first question

startButton.addEventListener("click", function(){
quiz.style.display = "block"
nextButton.style.display = "block"
question.textContent = "What does CSS stand for?"
answer1.textContent = "Computer Science Sheets"
answer2.textContent = "Calculated Style Source"
answer3.textContent = "Cascading Style Sheets"
answer4.textContent = "Color Selecting Source"

});

//displays actual quiz and sets them in order so it changes per click on next button

nextButton.addEventListener("click", function(){
  questionNum++;
  if (questionNum == 2 ){
  quiz.style.display = "block"
  nextButton.style.display = "block"
  question.textContent = "What does eventListener do?"
  answer1.textContent = "Creates an audio narrarator "
  answer2.textContent = "Sets up a function that will be called whenever the specified event is delivered to the target."
  answer3.textContent = "Sets up a function that will record what the user tells it via microphone"
  answer4.textContent = "Lets the user play music within the browser"
  } else if (questionNum == 3) {
    quiz.style.display = "block"
    nextButton.style.display = "block"
    question.textContent = "What can Web API's do?"
    answer1.textContent = "It can extend the functionality of the browser"
    answer2.textContent = "It can greatly simplify complex functions"
    answer3.textContent = "It can provide easy syntax to complex code"
    answer4.textContent = "All of the above" 
  }
  else if (questionNum == 4){
quiz.style.display = "Block" 
nextButton.style.display = "block" 
question.textContent = "What is an array in JS?"
    answer1.textContent = "A sort of futuristic weapon"
    answer2.textContent = "A JS method that creates straight lines"
    answer3.textContent = "A built in function within JS"
    answer4.textContent = "A collection of multiple items under a single variable name" 
  }
  });

startButton.addEventListener("click", function(){
    introMessage.style.display = "none"
});

startButton.addEventListener("click", function(){
    timer.style.display = "inline"
    setTime()
});


//timer//
function setTime() {

    var timerInterval = setInterval(function() {
      timer.textContent = "Time left: " + secondsleft;
        secondsleft--;
      if(secondsleft === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
  // displays game over
  function sendMessage() {
    timer.textContent = " ";
    endgame
  }


  //true, false//
  answer1.addEventListener("click", function(){
    display
  });



answer1.addEventListener("click",() => {
  if(answerlist.style.color == "--water"){
    answer1.style.color="--space "
    return
  }
  answer1.style.backgroundColor = "--water";
  selected = answer1.value;
  })




//saves initials//
localStorage.setItem("Intitials", inputInitials);



