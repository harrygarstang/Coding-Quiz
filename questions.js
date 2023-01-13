var questions = [
    {
      question: "What is the correct syntax for an if statement?",
      answers: [
        "if i = 5 then",
        "if i == 5",
        "if (i == 5)",
        "if i = 5"
      ],
      correctAnswer: "if (i == 5)"
    },
    // Add more questions here
  ];





// step 2: write down  question and answers  on the web page 
var questionElements = document.getElementById("question-title");
console.log(questionElements);

questionElements.textContent = questions.question1.question

var buttonElement = document.getElementById("start");

// to be able to check the answers are correct 