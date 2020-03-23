//Initializing game with variables to be effected by "Start Quiz" button
var startBtn = document.querySelector("#start-button");
var quizRules = document.querySelector("#quiz-rules");
var quizSectionDiv = document.querySelector("#quiz-section")
var quizQuestionDiv = document.querySelector("#quiz-question");
var option1Btn = document.querySelector("#Answer-1");
var option2Btn = document.querySelector("#Answer-2");
var option3Btn = document.querySelector("#Answer-3");
var option4Btn = document.querySelector("#Answer-4");
var nextButton = document.querySelector("#next-button");
var timerEl = document.querySelector("#navbar-timer");
var secondsLeft = 60;
var timerInterval;
var currentQuestionPosition = 0;
var correctAnswer = document.getElementById("correct");
var wrongAnswer = document.getElementById("wrong");

var questions = [{
    question: "How many columns can you have in a row?",
    options: ["16", "8", "4", "12"],
    correctAnswer: "12",
}, {
    question: "What is used to create dynamic web apps that take in user inputs, animate elements & much more?",
    options: ["CSS", "Javascript", "Bootstrap", "GitBash"],
    correctAnswer: "JavaScript",
}, {
    question: "Indexes always start with what number?",
    options: ["A", "1", "100", "0"],
    correctAnswer: "0",
},
{
    question: "What is a set of code features that developers can use in their app to interact with components of a user's web browser, data sets, hardware/software on a user's computer?",
    options: ["API", "HTML", "HTTPS", "Bootstrap"],
    correctAnswer: "API",
},
{
    question: "What function stops additional nested events from firing off?",
    options: ["Stop Propogation", "Stop Javascript", "Stop HTML", "Stop Load"],
    correctAnswer: "Stop Propogation",
},
];
// Add event listener to "Start Quiz" button
startBtn.addEventListener("click", startQuiz)

// Sequence of Actions to occur once the quiz has been started
function startQuiz() {
    console.log("Started")
    startBtn.classList.add("hide");
    console.log("Start Button Removed");
    quizRules.classList.add("hide");
    nextButton.classList.remove("hide");
    console.log("next button displayed");
    quizSectionDiv.classList.remove("hide");
    console.log("quiz section displayed");
    setNextQuestion()
}

// Function to start timer
function startTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer:" + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Add event listener to "Next" button
nextButton.addEventListener("click", setNextQuestion)

// Update quiz with next question
function setNextQuestion() {
    quizQuestionDiv.textContent = questions[0].question;
    option1Btn.textContent = questions[0].options[0];
    option2Btn.textContent = questions[0].options[1];
    option3Btn.textContent = questions[0].options[2];
    option4Btn.textContent = questions[0].options[3];
}

button1.addEventListener("click", function (event) {
    wrongAnswer.removeAttribute("class", "hide");
    nextQuestion2();
})
button2.addEventListener("click", function (event) {
    wrongAnswer.removeAttribute("class", "hide");
    nextQuestion2();
})
button3.addEventListener("click", function (event) {
    wrongAnswer.removeAttribute("class", "hide");
    nextQuestion2();
})
button4.addEventListener("click", function (event) {
    correctAnswer.removeAttribute("class", "hide");
    nextQuestion2();
})


function nextQuestion2() {
    questionElement.innerText = questions[1].question;
    button1.innerText = questions[1].options[0];
    button2.innerText = questions[1].options[1];
    button3.innerText = questions[1].options[2];
    button4.innerText = questions[1].options[3];

    button1.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion3();
    })
    button2.addEventListener("click", function (event) {
        correctAnswer.removeAttribute("class", "hide");
        nextQuestion3();
    })
    button3.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion3();
    })
    button4.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion3();
    })

}

function nextQuestion3() {
    questionElement.innerText = questions[2].question;
    button1.innerText = questions[2].options[0];
    button2.innerText = questions[2].options[1];
    button3.innerText = questions[2].options[2];
    button4.innerText = questions[2].options[3];

    button1.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion4();
    })
    button2.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion4();
    })
    button3.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion4();
    })
    button4.addEventListener("click", function (event) {
        correctAnswer.removeAttribute("class", "hide");
        nextQuestion4();
    })
}

function nextQuestion4() {
    questionElement.innerText = questions[3].question;
    button1.innerText = questions[3].options[0];
    button2.innerText = questions[3].options[1];
    button3.innerText = questions[3].options[2];
    button4.innerText = questions[3].options[3];

    button1.addEventListener("click", function (event) {
        correctAnswer.removeAttribute("class", "hide");
        nextQuestion5();
    })
    button2.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion5();
    })
    button3.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion5();
    })
    button4.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        nextQuestion5();
    })
}

function nextQuestion5() {
    questionElement.innerText = questions[4].question;
    button1.innerText = questions[4].options[0];
    button2.innerText = questions[4].options[1];
    button3.innerText = questions[4].options[2];
    button4.innerText = questions[4].options[3];

    button1.addEventListener("click", function (event) {
        correctAnswer.removeAttribute("class", "hide");
        endingScreen();
    })
    button2.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        endingScreen();
    })
    button3.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        endingScreen();
    })
    button4.addEventListener("click", function (event) {
        wrongAnswer.removeAttribute("class", "hide");
        endingScreen();
    })
}



// function selectAnswer() {

// var correctAnswerCount = 0;
// var finalScore = correctAnswerCount * 20;

// for (var i = 0; i < questions.length; i++) {
//     const answer = questions[i];
//     if (answer === questions[i].correctAnswer) {
//         score++;
//         return ("Correct!");
//     } else {
//         return ("Wrong!");
//     }
// }



// }
// Quiz timer
// let i = 0;
// var increment = function () {
//     i++;
//     console.log(i);
// };

// setTimeout() {
//     i++;
//     console.log(i);
//     59 * 1000;
// }


