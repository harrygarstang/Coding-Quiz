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
    {
      question: "Example question 2",
      answers: [
        "A",
        "B",
        "C",
        "D"
      ],
      correctAnswer: "A"
    },
    // Add more questions here
  ];

  var timeLeft = 100 
  var timerId = setInterval(countdown, 1000);



  
  function countdown() {
      if (timeLeft == 0) {
        clearInterval(timerId);
        console.log("Time is up!");
      } else {
        console.log("Time left: " + timeLeft + " seconds");
        timeLeft--;
    };
  }
  
  countdown();




// step 2: write down  question and answers  on the web page 
// var questionElements = document.getElementById("question-title");
// console.log(questionElements);

// questionElements.textContent = questions.question1.question

// var buttonElement = document.getElementById("start");

// to be able to check the answers are correct 