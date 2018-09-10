// Current listed variables. Any other variables will be created within loops so to maintain order, for my own being.
var computerResult
var previousNumber = 0
var win = 0
var loss = 0

var resetAndStart = function () {

    $(".crystalImages").empty();
    var crystalPhotos = [
        'https://t00.deviantart.net/mx0UNBntTF1oK_jAw_w6WtNjY94=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/7db3/th/pre/f/2018/038/c/7/bejeweled_green_gem_by_ldinos-dc2fr2h.png',
        'https://images-na.ssl-images-amazon.com/images/I/71NDLVvL-XL.png',
        'https://pre00.deviantart.net/263e/th/pre/f/2018/039/7/5/bejeweled_blue_gem_by_ldinos-dc2j9bc.png',
        'https://pre00.deviantart.net/9501/th/pre/f/2018/115/d/c/bejeweled_purple_gem_by_ldinos-dc9v7iu.png']

    computerResult = Math.floor(Math.random() * 69) + 30;

    $("#goal").html('Desired Score: ' + computerResult);

    // Creating a crystalBox variable within the for loop. I will format the boxes later via CSS.
    for (var i = 0; i < 4; i++) {
        var randomNumero = Math.floor(Math.random() * 14) + 1;
        // console.log(randomNumber);
        var crystal = $("<div>");
            // Setting values to my crystal boxes, by attributing them.
            crystal.attr({
                    "class": 'crystal',
                    "data-randomCrystalBoxNumber": randomNumero
                });
                crystal.css({
                    "background-image": "url('" + crystalPhotos[i] + "')",
                    "background-size": "cover"
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
        loss++;
        $("#loss").html("Losses: " + loss);
        previousNumber = 0;
        resetAndStart();
    }

    else if (previousNumber === computerResult) {
        win++;
        $("#win").html("Wins: " + win);
        previousNumber = 0;
        resetAndStart();
    }
});