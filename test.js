var questions = [
    {
        question: "Why would you surround a piece of text with h1 tags?",
        choices: ["To make the text say H1", "To indicate that the text is the main heading on the page", "To make the text header number 1", "To make the text italic"],
        answer: "To indicate that the text is the main heading on the page"
    },
    {
        question: "What is CSS?",
        choices: ["Cascading Style Sheets, ", "Concording Byle Jeets", "Cascading Style Servers", "Cascading Sisters Serority"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is Bootstrap?",
        choices: ["Something for my shoes", "A framework", "A modular debugger", "A kind of tea"],
        answer: "Paris"
    },
    {
        question: "What is NOT a web API?",
        choices: ["Words API", "Spoonacular Recipe API", "Skyscanner Flight Search API", "HTML"],
        answer: "HTML"
    },
    {
        question: "What is the DOM?",
        choices: ["Document Occupying Manipulator", "Decent Orange Magnitude", "Document Objectifying Model", "Document Object Model"],
        answer: "Document Object Model"
    }
];

var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementById("questions");
var choiceContainer = document.getElementById("choices");
var timeLeft = 100;
var timer = document.getElementById("time");
var interval;

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    interval = setInterval(() => {
        timeLeft--;
        timer.textContent = timeLeft + ' seconds';
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
    showQuestion();
}

function showQuestion() {
    document.getElementById("question-title").innerHTML = questions[currentQuestion].question;
    choiceContainer.innerHTML = "";
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = document.createElement("button");
        choice.innerHTML = questions[currentQuestion].choices[i];
        choice.classList.add("choice-btn");
        choice.onclick = checkAnswer;
        choiceContainer.appendChild(choice);
    }
}

function checkAnswer() {
    if (this.textContent === questions[currentQuestion].answer) {
        score++;
        document.getElementById("feedback").innerHTML = "Correct!";
    } else {
        timeLeft -= 10;
        document.getElementById("feedback").innerHTML = "Wrong!";
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        endQuiz();
    } else {
        showQuestion();
    }
}

function endQuiz() {
    clearInterval(interval);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").innerHTML = score;

    
}

document.getElementById("submit").onclick = function(){
    //Submit the score to the local storage
    let initials = document.getElementById("initials").value;
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    highscores.push({initials, score});
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

document.getElementById("start").onclick = startQuiz;
document.getElementById("submit").onclick = function () {
    //Submit the score to the local storage
    var initials = document.getElementById("initials").value;
    localStorage.setItem(initials, score);
}

// Get the highscores list element
let highscoresList = document.getElementById("highscores");

// Get the highscores from local storage
let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

// Sort the highscores by score in descending order
highscores.sort((a, b) => b.score - a.score);

// Loop through the highscores and add them to the list
for (let i = 0; i < highscores.length; i++) {
    let highscore = highscores[i];
    let li = document.createElement("li");
    li.textContent = highscore.initials + " - " + highscore.score;
    highscoresList.appendChild(li);
}

// Add a clear highscores button event listener
document.getElementById("clear").addEventListener("click", function() {
    localStorage.removeItem("highscores");
    while (highscoresList.firstChild) {
        highscoresList.removeChild(highscoresList.firstChild);
    }
});

