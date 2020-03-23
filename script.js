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
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = "Time's Up!";
}


// Add event listener to "Next" button
nextButton.addEventListener("click", setNextQuestion)

// Update quiz with next question
function setNextQuestion() {
    quizQuestionDiv.textContent = questions[0].question;
    option1Btn.textContent = questions[0].options[0];
    option2Btn.textContent = questions[1].options[1];
    option3Btn.textContent = questions[2].options[2];
    option4Btn.textContent = questions[3].options[3];
}

function showQuestion(question) {
    quizQuestionDiv.textContent = questions.question
}

var questions = [{
    question: "How many columns can you have in a row?",
    options: {
        option1: ["16", "incorrect"],
        option2: ["8", "incorrect"],
        option3: ["12", "correct"],
        option4: ["4", "incorrect"]
    },
    correctAnswer: "12",
}, {
    question: "What is used to create dynamic web apps that take in user inputs, animate elements & much more?",
    options: {
        option1: ["CSS", "incorrect"],
        option2: ["Javascript", "correct"],
        option3: ["Bootstrap", "incorrect"],
        option4: ["GitBash", "incorrect"]
    },
    correctAnswer: "JavaScript",
}, {
    question: "Indexes always start with what number?",
    options: {
        option1: ["A", "incorrect"],
        option2: ["1", "incorrect"],
        option3: ["100", "incorrect"],
        option4: ["0", "incorrect"]
    },
    correctAnswer: "0",
},
{
    question: "What is a set of code features that developers can use in their app to interact with components of a user's web browser, data sets, hardware/software on a user's computer?",
    options: {
        option1: ["API", "correct"],
        option2: ["HTML", "incorrect"],
        option3: ["HTTPS", "incorrect"],
        option4: ["Bootstrap", "incorrect"]
    },
    correctAnswer: "API",
},
{
    question: "What function stops additional nested events from firing off?",
    options: {
        option1: ["Stop Propogation", "correct"],
        option2: ["Stop Javascript", "incorrect"],
        option3: ["Stop HTML", "incorrect"],
        option4: ["Stop Load", "incorrect"]
    },
    correctAnswer: "Stop Propogation",
},
];

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


