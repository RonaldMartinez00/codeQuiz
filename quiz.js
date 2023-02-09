var timeLeft = 90;
var score= 0;
var quiz = document.getElementById("quiz");
var questions = [
    {    
      question:  document.getElementById("question").innerHTML = "What can Web API's do?",
      answers: [
        {text: "It can extend the functionality of the browser", correct: false},
        {text: "It can greatly simplify complex functions", correct: false},
        {text: "It can provide easy syntax to complex code", correct: false},
        {text: "All of the above" , correct: true}
      ]
    },
    {    
      question: document.getElementById("question").innerHTML = "What is an array in JS?",
      answers: [
        {text: "A sort of futuristic weapon", correct: false},
        {text: "A collection of multiple items under a single variable name", correct: true},
        {text: "A JS method that creates straight lines", correct: false},
        {text: "A built in function within JS", correct: false}
      ]
    },
    {    
      question: document.getElementById("question").innerHTML = "Which symbol is used for comments in Javascript?",
      answers: [
        {text: "//", correct: true},
        {text: "<!--", correct: false},
        {text: "#", correct: false},
        {text: "CMMND + Shift +C", correct: false}
      ]
    },
    {
    question: document.getElementById("question").innerHTML = "What is === operator?",
    answers: [
      {text: "A way to overwrite the value of a variable", correct: false},
      {text: "A strict equality operator, which returns true when the two operands have the same value without conversion", correct: true},
      {text: "A shorthand way to create an arrray", correct: false},
      {text: "An error symbol that displays in the console", correct: false}
    ]
  }
];
let currentQuestion = 0;


// Start the timer
function startTimer() {
  let timerInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("timeleft").innerHTML = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
};

function showQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("question").innerHTML = question.question;
  while (quiz.firstChild) {
    quiz.removeChild(quiz.firstChild);
  }
  question.answers.forEach(function(answer) {
    let button = document.createElement("button");
    button.innerHTML = answer.text;

    button.addEventListener("click", function() {
      if (answer.correct) {
        score++;
        document.getElementById("score").innerHTML = score;
      } else {
        timeLeft -= 10;
      }

      currentQuestion++;

      function endQuiz() {
        // Stop the timer
        clearInterval(startTimer);
        localStorage.setItem("score",score);
        window.location.href = "highscore.html";
      }

      if (currentQuestion === questions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    });

    document.getElementById("quiz").appendChild(button);
  })
  
};
