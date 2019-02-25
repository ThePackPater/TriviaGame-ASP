$(document).ready(function () {

    var i;
    var quiz = [];
    var Count;
    var correct = 0;
    var missed = 0;
    var attempted = 0;
    var intervalTimer;
    var delayButtonAlert;
    var newQuest;
    var ansAttempt;

    quizBuild();

    i = 0;

    $("#new-question").on("click", displayNewQuestion);

    function displayNewQuestion() {

        if (i > 0) { clearTimeout(newQuest); }

        ansAttempt = false;

        $("#new-question").hide();

        quizWrite();

        Count = 30;

        intervalTimer = setInterval(countDown, 1000)

        delayButtonAlert = setTimeout(notAttempted, 30000)
    }

    $(document).on("click",  Attempted);

    function countDown() {

        Count -= 1;

        $("#timer").html(Count +" seconds left... ")

        return Count;

    }

    function Attempted() {

        clearTimeout(delayButtonAlert);

        clearTimeout(intervalTimer);

        ansAttempt = true;

        $("#message").show();

        userChoice = ("click", ".answer");
        console.log(userChoice);

        attempted += 1;

        if (userChoice == quiz[i].choice4) {

            $("#message").html("correct!");

            correct += 1;
        }
        else {

            $("#message").html("sorry!");

            missed += 1;
        }

        $(".stats").show();

        displayStats();

        ansTime();
    }

    function notAttempted() {


        if (ansAttempt != true) {

            clearTimeout(delayButtonAlert);

            clearTimeout(intervalTimer);

            missed += 1;

            $(".stats").show();

            displayStats();
        }

        else {

            return
        }
    }

    function ansTime() {

        if (i < quiz.length) {

            newQuest = setTimeout(displayNewQuestion, 5000);
        }
        
        else {

            $("#message").html("Game Over");

            $("#timer")

            return;
        }

        i++;

    }

    function questionSetup(question, choice1, choice2, choice3, choice4, ans, attempted) {

        this.question = question;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.choice3 = choice3;
        this.choice4 = choice4;
        this.ans = ans;
        this.attempted = attempted;

    }

    function quizBuild() {

        quiz[0] = new questionSetup("How many sides on a square?", "3", "L7", "6", "4", 4, false);
        quiz[1] = new questionSetup("How many sides on a octogon?", "7", "stop asking", "7", "8", 4, false);
        quiz[2] = new questionSetup("How many rhombuses are in a rhombohedron?", "11", "as many as it needs", "3", "6", 4, false);
        quiz[3] = new questionSetup("How many sides does a triangle have?", "2", "that's private!", "8", "3", 4, false);
        quiz[4] = new questionSetup("How many sides does a decagon have?", "12", "lots", "2", "10", 4, false);
        quiz[5] = new questionSetup("How many sides does a hexagon have?", "8", "1", "hex", "6", 4, false);
        quiz[6] = new questionSetup("How many curves are contained in a polygon?", "2", "all of them", "6", "0", 4, false);
        quiz[7] = new questionSetup("How many 'types' of polygons are there?", "3", "too many", "12", "6", 4, false);
        quiz[8] = new questionSetup("How many sides does a Quadilateral have?", "8", "2", "ocho", "4", 4, false);
        quiz[9] = new questionSetup("If a chicken and a half, could lay an egg and a half, in a day in a half, how long would it take a one legged monkey to kick all the seeds out of a dill pickle?", "2", "8", "13, cause icecream has no bones", "4", 4, false);


        return quiz
    }

    function quizWrite() {

        $("#question").empty().html(quiz[i].question);
        $("#ans1").empty().html(quiz[i].choice1);
        $("#ans2").empty().html(quiz[i].choice2);
        $("#ans3").empty().html(quiz[i].choice3);
        $("#ans4").empty().html(quiz[i].choice4);

    }

    function displayStats() {

        $(".stats").html("<h4> Correct: " + correct + '<br>' + "Incorrect: " + missed + '<br>' + "Attempted: " + attempted + '</h4>');


    }


})     