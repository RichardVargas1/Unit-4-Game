
var computerResult
var previousNumber = 0
var wins = 0
var losses = 0

var resetAndStartTheGame = function () {

    computerResult = Math.floor(Math.random() * 69) + 30;

    $("#computerResult").html('Your number to match: ' + computerResult);

    // Creating a crystalBox variable within the for loop. I will format the boxes later via CSS.
    for (var i = 0; i < 4; i++) {
        var randomNumber = Math.floor(Math.random() * 14) + 1;
        // console.log(randomNumber);
        var crystalBox = $("<div>");
        // Setting values to my crystal boxes, by attributing them.
            crystalBox.attr({
                "class": 'crystalBox',
                "data-randomCrystalBoxNumber": randomNumber
        });
            crystalBox.html(randomNumber);
        $(".crystals").append(crystalBox);
    }
}

resetAndStartTheGame();
// jQuery code for clicking on on of my crystal boxes. This will communicate to the html file.
$(".crystalBox").on('click', function () {

    var num = parseInt($(this).attr('data-randomCrystalBoxNumber'));

    previousNumber += num;

    console.log(previousNumber);

    if(previousNumber > computerResult){
        losses--;
        $("#losses").html(wins);
        resetAndStartTheGame();
    }
    else if(previousNumber === computerResult){
        wins++;
        $("#wins").html(wins);
        resetAndStartTheGame();
    }
});