$(document).ready(function () {
    var quizQuestions = [
    {
        question: "aaaaaa",
        choices: ["a", "b", "c", "d"],
        answer: 0,
        photo: "assets/images/giphy(1).gif",
    },
    {
        question: "bbbbb",
        choices: ["a", "b", "c", "d"],
        answer: 1,
        photo: "assets/images/giphy(2).gif",
    },
    {
        question: "ccccc",
        choices: ["a", "b", "c", "d"],
        answer: 2,
        photo: "assets/images/giphy(3).gif",
    }
]

//score variables
var correct = 0;
var wrong = 0;
var noAnswer = 0;
var numberOfQuestions = 2;

//timer variables. Countdown starts at 30.
var number = 30;
var interval;
var timerRunning = false;

//question selection variables
var pick;
var index;
var choicesArray = [];
var buttonArray = [];

//

$("#reset").hide();
//start button. Starts timer. reveals questions next question. vanishes
$("#start").on("click", run);
$("#start").fadeOut("slow");
displayQuestion()
runTimer()

function run() {
    console.log("button hit");
}

function runTimer() {

    if (!timerRunning) {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }
    function decrement() {
        number--;
        $("#timer").html("<h2>Time Remaining: " + number + "</h2>");
        if (number === 0) {
            stop();
            noAnswer++;
            $("#answerBlock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer] + "</p>");

        }
    }


    //Math.Random is used to select a question randomly from quizQuestion 
    function displayQuestion() {
        index = Math.floor(Math.random() * quizQuestions.length);
        pick = quizQuestions[index];
    }

    //for loop is used to print buttons to screen and populate botton with quesiton text
    $("#questionsblock").html("<h2>" + pick.quizQuestions + "</h2>");

    for (i = 0; i < pick.choices.length; i++) {
        var a = $("<button>");
        a. addClass ("choices")
       a.attr("data-name", choices[i]);
        $("#button").append(a);
        console.log()


    }

    //user selects answer from the for buttons, and that answer is compared to choices array.THIS NEEDS WORK

    var userChoice = $("<button>")
    userChoice.addClass("answerChoice");
    userChoice.html(PickC)

    //if user quesses correct, the timer stops, correct increases by one, answer block shows correct and picture plays. If they guess wrong, the timer stops, correct answer shows, wrong increases by one, and picture plays

    if (userChoice === answer) {
        stop();
        correct++;
        $("answerBlock").html("<p>Corrct!</P>");
        showPicture()
    }
    else {
        stop();
        wrong++;
        $("#answeblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
        showPicture()
    }

    //show picture from quizQuestions array after an answer is selected by player. It pops up in the answer block for after question is selected. it is in the answer block. THIS NEEDS WORK.
    showPicture = function () {
        $("#answerblock").append("<img src=" + pick.photo + ">");
        newArray.push(pick);
        options.splice(index, 1);

        // var hidepic = setTimeout(function () {
        // //     $("#answerblock").empty();
        // //     timer = 5;

        // )};

        // final quiz tally screen
        if ((correct + wrong + noAnswer) === numberOfQuestions) {
            $("#questionblock").empty();
            $("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
            $("#answerblock").append("<h4> Correct: " + correctCount + "</h4>");
            $("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>");
            $("#answerblock").append("<h4> Unanswered: " + unanswerCount + "</h4>");
            $("#reset").show();
            correctCount = 0;
            wrongCount = 0;
            unanswerCount = 0;
            // game keeps playing until all questions have been answered
        } else {
            runTimer();
            displayQuestion();

        }
    }

    //reset button at end of game resets answers, questions, timer, 
    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for (var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        displayQuestion();
    }
    
