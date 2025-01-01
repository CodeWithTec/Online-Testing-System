


// List of Questions here
const questions = [
    {
        question: "Which is largest animal in the World?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct:  false}
        ]
    },
    {
        question: "Which is small country in the World?",
        answer: [
            {text: "Vitican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct:  false}
        ]
    },
    {
        question: "Which is largest animal in the World?",
        answer: [
            {text: "Shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct:  false}
        ]
    },
    {
        question: "Which is largest desert in the World?",
        answer: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Antarctica", correct: false},
            {text: "Sahara", correct:  true}
        ]
    },
    {
        question: "What is the small continent in the world?",
        answer: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "South America", correct: false},
            {text: "Africa", correct:  false}
        ]
    }
];







// variable for the buttons define here
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
// const timer = document.getElementById("timer");


// creating a variable for the score
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0; 
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        }
        button.addEventListener('click', selectAnswer);
    });
}

 function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
 }

 function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score += 20;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
 }

function showScore(){
    resetState();
    questionElement.innerHTML = `${studentName}, Your Result ${score}pts out of ${questions.length}! Questions`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "none";
}



function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

//timer checking 
// let timer = 2 * 20;
// let interval = setInterval(function(){
//   document.getElementById('timer').innerHTML=timer;
//   timer--;
//   if (timer === 0){
//     clearInterval(interval);
//     // document.getElementById('timer').innerHTML='Question Time Up';
//     showScore();
//   }
// }, 1000);

// Student name Section 
let studentName = "";
let errorMess = document.getElementsByClassName("name-error");
// Function to start the quiz
function startQuiz_1() {
    studentName = document.getElementById("student-name").value.trim();
    if (studentName === "") {
            document.getElementById("name-error").style.display="block";
            return;

    }

    // Hide the name input section and show the quiz section
    document.getElementById("student-name-section").style.display="none";
    document.getElementById("quiz-section").style.display="block";

    showQuestion();
}


 nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
 })

 
startQuiz();


// timer time

        // Countdown duration in seconds (45 minutes)
        const countdownTime = 45 * 60; // 45 minutes * 60 seconds
        let timeLeft = countdownTime;  // Variable to track the remaining time

        // Function to format the time in mm:ss format
        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secondsRemaining = seconds % 60;
            return `${minutes < 10 ? '0' + minutes : minutes}:${secondsRemaining < 10 ? '0' + secondsRemaining : secondsRemaining}`;
        }

        // Function to start the countdown
        function startCountdown() {
            const countdownDisplay = document.getElementById('timer');  // Get the element to display the countdown
            const messageDisplay = document.getElementById('message');  // Get the element to show a message when the timer ends

            // Update the display every second
            const interval = setInterval(function() {
                // Display the formatted time
                countdownDisplay.textContent = formatTime(timeLeft);

                // When the timer reaches zero, stop the countdown and show a message
                if (timeLeft <= 0) {
                    clearInterval(interval);
                    showScore();
                    countdownDisplay.textContent = "00:00";  // Set to 00:00 when timer ends
                    messageDisplay.textContent = "Time's up!";  // Display message
                } else {
                    timeLeft--;  // Decrease the time remaining by one second
                }
            }, 1000); // Update every 1000 milliseconds (1 second)
        }

        // Start the countdown when the page loads
        window.onload = startCountdown;