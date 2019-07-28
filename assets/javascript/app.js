// // Create array to store game info

let gameArray = [
    {
        question: "What year was the first Jurrassic Park filmed?",
        answers: {
            a: '1990',
            b: '1993',
            c: '1995'
        },
        correctAnswer: 'c'
    },
    {
        question: "How much did the film gross worldwide?",
        answers: {
            a: '$357,000,000',
            b: '$375,000',
            c: '$1,525,000'
        },
        correctAnswer: 'a'
    },
    {
        question: "Who directed Jurrassic Park",
        answers: {
            a: 'Steven Soderberg',
            b: 'Steven Spielberg',
            c: 'Stephen King'
        },
        correctAnswer: 'c'
    },
    {
        question: "In total, how long did dinosaurs appear in the film?",
        answers: {
            a: '30mins',
            b: '45mins',
            c: '15mins'
        },
        correctAnswer: 'c'
    },
    {
        question: "How heavy was the animatronic T-rex?",
        answers: {
            a: '1200lbs',
            b: '500lbs',
            c: '5000lbs'
        },
        correctAnswer: 'a'
    }

];


let questionContainer = document.getElementById('question_container');
let answerContainer = document.getElementById('results');
let submitBtn = document.getElementById('submit');

populate(gameArray, questionContainer, answerContainer, submitBtn);

function populate(questions, questionContainer, answerContainer, submitBtn) {

    function showQuestions(questions, questionContainer) {
        let output = [];
        let answers;

        for (let index = 0; index < questions.length; index++) {
            answers = [];

            for (letter in questions[index].answers) {

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + index + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[index].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[index].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        questionContainer.innerHTML = output.join('');
    }

    // create function show the tally of correct answers
    function results(questions, questionContainer, answerContainer) {
        let answerContainers = questionContainer.querySelectorAll('.answers');

        let userAnswer = '';
        let numCorrect = 0;

        for (let index = 0; index < questions.length; index++) {
            userAnswer = (answerContainers[index].querySelector('input[name=question' + index + ']:checked') || {}).value;
            if (userAnswer === questions[index].correctAnswer) {
                numCorrect++;
                answerContainers[index].style.color = 'lightgreen';
            } else {
                answerContainers[index].style.color = 'red';
            }
        }

        answerContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // Create variable for timer

    let timeRemaining = 30; // sets timer to 30 
    let intervalId; // varibale that hold the interval ID when the run functio is executed
    console.log(timeRemaining);

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    // When the start button is clicked, execute the run function
    $("#start").on("click", run);

    // Declare the decrement function
    function decrement() {

        // decrement the number by 1
        timeRemaining--;

        // show the number in the #timer 

        $("#timer").html(timeRemaining);
        console.log(timeRemaining)

        // if the number hits zero...
        if (timeRemaining === 0) {

            // run stop function
            stop();

            // Alert user that time is up
            alert("Time is up!");

            console.log("time is up");
        }
    }

    // the stop function
    function stop() {

        // Clear the interval
        clearInterval(intervalId);
    }
    // displays questions
    showQuestions(questions, questionContainer);

    // shows results
    submitBtn.onclick = function () {
        results(questions, questionContainer, answerContainer);
        clearInterval(intervalId);
        setTimeout(function(){ alert("Refresh to play again!"); }, 3000);
    }

}

