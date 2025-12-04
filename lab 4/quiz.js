// Web Dev I - Lab  
// Prompt Quizzer – A Quiz Game 

// Array of quiz questions (minimum 5)
const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "Which programming language runs in the browser?",
        answer: "javascript"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "let"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "Which method is used to convert text to lowercase in JavaScript?",
        answer: "tolowercase"
    }
];

// Main quiz function
function runQuiz() {

    let score = 0; // score counter

    for (let i = 0; i < quizQuestions.length; i++) {

        // Show question and get input
        let userAnswer = prompt(quizQuestions[i].question);

        // Handle cancel or empty input
        if (!userAnswer) {
            alert("No answer entered!");
            continue;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 👍");
        } else {
            alert("Wrong! The correct answer is: " + quizQuestions[i].answer);
        }
    }

    // Show final score
    alert("Quiz Finished!\nYour Score: " + score + " / " + quizQuestions.length);
}

// Run this command in console to start:
// runQuiz();
