//Creating a function for "Start Quiz" button
var startBtn = document.querySelector("#start");

function takeQuiz() {

    var questions = [{
        question: "How many columns can you have in a row?",
        options: ["16", "8", "12", "4"],
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


    var correctAnswerCount = 0;
    var finalScore = correctAnswerCount * 20;

    for (var i = 0; i < questions.length; i++) {
        const answer = questions[i];
        if (answer === questions[i].correctAnswer) {
            score++;
            return ("Correct!");
        } else {
            return ("Wrong!");
        }
    }
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


