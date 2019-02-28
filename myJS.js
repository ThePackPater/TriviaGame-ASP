$(document).ready(function () {

    var i;
    var quiz = [];
    var Count;
    var correct = 0;
    var Incorrect = 0;
    var intervalTimer;
    var delayButtonAlert;
    var newQuest;
    var correctAns;
    var ansAttempt;
    var attempted = 0;

    quizBuild()

    i = 0;

    $("#new-question").on("click", displayNewQuestion);

    function displayNewQuestion() {

        $("#new-question").hide();

        quizWrite();

        if (i > 0) { clearTimeout(newQuest); }

        ansAttempt = false;

        Count = 10;

        intervalTimer = setInterval(countDown, 1000)

        delayButtonAlert = setTimeout(notAttempted, 10000)
    }

    $(".answer").on("click", Attempted);

    function countDown() {

        Count -= 1;

        $("#timer").html(Count + " seconds left...")

        return Count;

    }



    function Attempted() {

        clearTimeout(delayButtonAlert);

        clearTimeout(intervalTimer);

        ansAttempt = true;

        $("#message").show();

        userChoice = $(this).text();

        attempted += 1;

        if (attempted === 10) {

            location.replace("gameover.html");

        }

        correctAns = quiz[i].c;

        if (userChoice === correctAns) {

            $("#message").html("Correct it is illegal to " + quiz[i].question + " in " + correctAns + ".");
            console.log(correctAns);
            correct += 1;

        }

        if (userChoice !== correctAns) {

            $("#message").html("Incorrect it is illegal to " + quiz[i].question + " in " + correctAns + ".");

            Incorrect += 1;

        }

        $(".stats").show();

        displayStats();

        ansTime();

    }

    function notAttempted() {

        if (ansAttempt != true) {

            clearTimeout(delayButtonAlert);

            clearTimeout(intervalTimer);

            Incorrect += 1;

            attempted += 1;

            if (attempted === 10) {

                location.replace("gameover.html");

            }

            $("#message").html("Incorrect it is illegal to " + quiz[i].question + " in " + correctAns + ".");

            $(".stats").show();

            displayStats();

            ansTime();

        }

    }

    function ansTime() {

        if (i < quiz.length) {

            newQuest = setTimeout(displayNewQuestion, 300);
        }

        i++;
    }

    function questionSetup(question, a, b, c, d, attempted) {

        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.attempted = attempted;

    }

    function quizBuild() {

        quiz[0] = new questionSetup("peel an onion in a hotel room", "Florida", "Virginia", "California", "New York", false);
        quiz[1] = new questionSetup(" drive while you're asleep", "Wyoming", "Louisianna", "Tennessee", "New Hampshire", false);
        quiz[2] = new questionSetup(" swear in front of a corpse", "Massacucetts", "Arkansas", "Texas", "Montana", false);
        quiz[3] = new questionSetup(" sell Cornflakes on a Sunday", "Alabama", "New York", "Ohio (specifically Columbus)", "Maine", false);
        quiz[4] = new questionSetup(" sing while wearing a swimsuit", "California", "Georgia", "Florida", "Texas", false);
        quiz[5] = new questionSetup(" play the Randy Newman song 'Short People' ", "Florida", "South Dakota", "Maryland", "New England", false);
        quiz[6] = new questionSetup(" mistreat an oyster ", "New England", "Delaware", "Maryland", "New York", false);
        quiz[7] = new questionSetup(" take a picture of a rabbit in June", "Idaho", "Alaska", "Wyoming", "Kansas", false);
        quiz[8] = new questionSetup(" serve a piece of apple pie without cheese ", "Minesota", "Nebraska", "Wisconsin", "South Dakota", false);
        quiz[9] = new questionSetup(" shove a moose from an airplane", "North Dakota", "Washington", "Alaska", "Montana", false);

        return quiz
    }

    function quizWrite() {

        $("#question").empty().html("In what U.S. state is it illegal to " + quiz[i].question + "??");
        $("#ans1").empty().html(quiz[i].a);
        $("#ans2").empty().html(quiz[i].b);
        $("#ans3").empty().html(quiz[i].c);
        $("#ans4").empty().html(quiz[i].d);

    }

    function displayStats() {

        $(".stats").html("<h4> Correct: " + correct + "   Incorrect: " + Incorrect + /*+ "Attempted: " + attempted*/" </h4>");

    }

});   