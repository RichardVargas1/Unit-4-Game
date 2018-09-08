
var randomResult
var win
var loss

userResult = Math.floor(Math.random() * 69 ) + 30;

$("#userResult").html('Your Total Score: ' + userResult);

// Creating a crystalBox variable within the for loop. I will format the boxes later via CSS.
for(var i = 0; i < 4; i++) {
    var randomNumber = Math.floor(Math.random() * 14) + 1;
    // console.log(randomNumber);
    var crystalBox = $("<div>");
    crystalBox.attr({
        "class": 'crystalBox',
        "data-randomCrystalBoxNumber": randomNumber
    });
    $(".crystals").append(crystalBox);
}
// jQuery code for clicking on on of my crystal boxes. This will communicate to the html file.
$(".crystalBox").on('click', function () {
    console.log($(this));
});