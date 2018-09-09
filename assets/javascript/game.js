// Current listed variables. Any other variables will be created within loops so to maintain order, for my own being.
var computerResult
var previousNumber = 0
var win = 0
var loss = 0

var resetAndStart = function () {

    $(".crystalImages").empty();

    computerResult = Math.floor(Math.random() * 69) + 30;

    $("#goal").html('Desired Score: ' + computerResult);

    // Creating a crystalBox variable within the for loop. I will format the boxes later via CSS.
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 14) + 1;
        // console.log(randomNumber);
        var crystal = $("<div>");
            // Setting values to my crystal boxes, by attributing them.
            crystal.attr({
                    "class": 'crystal',
                    "data-randomCrystalBoxNumber": random
                });
        $(".crystalImages").append(crystal);
    }
    $("#previousNumber").html("Current Score: " + previousNumber);
}

// This is going to be used to restart the game, win or loss.
resetAndStart();

// jQuery code for clicking on on of my crystal boxes. This will communicate to the html file.
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-randomCrystalBoxNumber'));

    previousNumber += num;

    $("#previousNumber").html("Current Score: " + previousNumber);

    console.log(previousNumber);

    if (previousNumber > computerResult) {
        loss--;
        $("#loss").html("You loss: " + loss);
        previousNumber = 0;
        resetAndStart();
    }

    else if (previousNumber === computerResult) {
        win++;
        $("#win").html("You win: " + win);
        previousNumber = 0;
        resetAndStart();
    }
});