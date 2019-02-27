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

        userChoice = $(this);

        console.log(userChoice);

        correctAns = (quiz[i].c);

        if (userChoice === correctAns) {

            $("#message").html("Correct!");

            correct += 1;

            if (correct === 10) {

                location.replace("goodjob.html");

            }
        }

        else {

            $("#message").html("Incorrect!");

            Incorrect += 1;
        }

        if (Incorrect === 10) {

            location.replace("gameover.html");

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

            if (Incorrect === 10) {

                location.replace("gameover.html");

            }

            $("#message").html("Incorrect!");

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

        

    function questionSetup(question, a, b, c, d, attempted){

        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.attempted = attempted;

        }

        function quizBuild() {

         //for (i = 0; i < quiz.length; i++);

        quiz[0] = new questionSetup("peel an onion in a hotel room?", "Florida", "Virginia", "California", "New York", false);
        quiz[1] = new questionSetup(" drive while you're asleep?", "Wyoming", "Louisianna", "Tennessee", "New Hampshire", false);
        quiz[2] = new questionSetup(" swear in front of a corpse?", "Massacucetts", "Arkansas", "Texas", "Montatna", false);
        quiz[3] = new questionSetup(" sell Cornflakes on a Sunday?", "Alabama", "New York", "Ohio (specifically Columbus)", "Maine", false);
        quiz[4] = new questionSetup(" sing while wearing a swimsuit?", "California", "Georgia", "Florida", "Texas", false);
        quiz[5] = new questionSetup(" play the Randy Newman song 'Short People' ?", "Florida", "South Dakota", "Maryland", "New England", false);
        quiz[6] = new questionSetup(" mistreat an oyster ?", "New England", "Delaware", "Maryland", "New York", false);
        quiz[7] = new questionSetup(" take a picture of a rabbit in June?", "Idaho", "Alaska", "Wyoming", "Kansas", false);
        quiz[8] = new questionSetup(" serve a piece of apple pie without cheese ?", "Minesota", "Nebraska", "Wisconsin", "South Dakota", false);
        quiz[9] = new questionSetup(" shove a moose from an airplane?", "North Dakota", "Washington", "Alaska", "Montana", false);
        
        return quiz
    }
    

        function quizWrite() {

           
        $("#question").empty().html("In what U.S. state is it illegal to " + quiz[i].question);
        $("#ans1").empty().html(quiz[i].a);
        $("#ans2").empty().html(quiz[i].b);
        $("#ans3").empty().html(quiz[i].c);
        $("#ans4").empty().html(quiz[i].d);

    }

        function displayStats() {

        $(".stats").html("<h4> Correct: " + correct + "<br>" + "Incorrect: " + Incorrect + "</h4>");


    }


    });   