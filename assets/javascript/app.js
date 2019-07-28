// Create array to store game info
let gameArray = [

    {

        question: 'What year was the first Jurrassic Park filmed?',
        answer: [
            '1990',
            '1993',
            '1995'
        ],
        id: 'question-one',
        correct: '0'

    },

    {

        question: 'How much did the film gross worldwide?',
        answer: [
            '$357,000,000',
            '$375,000',
            '$1,525,000'
        ],
        id: 'question-two',
        correct: '0'

    },
    {

        question: 'Who directed Jurrassic Park?',
        answer: [
            'Steven Soderberg',
            'Steven Spielberg',
            'Stephen King'
        ],
        id: 'question-three',
        correct: '1'

    },
    {

        question: 'How heavy was the animatronic T-rex?',
        answer: [
            '1200lbs',
            '500lbs',
            '5000lbs',
        ],
        id: 'question-four',
        correct: '0'

    },
    {

        question: 'In total, how long did dinosaurs appear in the film?',
        answer: [
            '30mins',
            '45mins',
            '15mins'
        ],
        id: 'question-five',
        correct: '2'

    }

]

// Begin game by clicking the start button

$("#start").on("click", function () {
    $('.wrapper').show();
    // This will log "Game Begins" when the start button is clicked
    console.log('Game Begins!');
});


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

let questionContainer = document.getElementById('question_container');

// Grab the id of the div on the page
// Push the value of the gameobject answer array into that div
// give it a text value
// Save the right answer in a variable

function populate() {

    let answerDiv;
    let questionDiv;
    let answerText;
    let questionTitle;

    for (index = 0; index < gameArray.length; index++) {
        questionDiv = $('<div>');
        questionTitle = $('<div>').text(gameArray[index].question);
        $(questionContainer).append(questionTitle);
        console.log(questionTitle)

        answerDiv = $('<div>');
        for (j = 0; j < gameArray[index].answer.length; j++) {
            answerText = $('<div>').text(gameArray[index].answer[j]);

            $(answerDiv).append("<input type='checkbox' name='question-" + index + "' value'" + gameArray[index].answer[j] + "'>");
            $(answerDiv).append(answerText);
            
        }

        $(questionDiv).append(answerDiv);
        $(questionContainer).append(questionDiv);
        console.log(questionTitle);
        console.log(answerText);
    }
}
populate();


for(let index = 0; index < gameArray.length; index++) {
    if (isCorrect(gameArray.question[index])) {
        correct++;
    } else {
        if(checkAnswered(gameArray.question[index])){
            incorrect++;
        } else {
            unAnswered++;
        }
    }

$('.results').html('correct: '+correct+ "<br>" +'incorrect: '+incorrect+ "<br>" +'unanswered: '+unAnswered);

}



 // when an answer is clicked
        // grab the one that was clicked and it's value
        // check against the correct answer
        // increment correct or incorrect
        // move to next question

// We start the game with a score of 0.
let score = 0;
// Variable to hold the index of current question.
let questionIndex = 0;
