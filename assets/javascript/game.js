
var randomResult
var win
var loss
// Creating a crystalBox variable within the for loop. I will format the boxes later via CSS.
for(var i = 0; i < 4; i++) {
    var crystalBox = $("<div>");
    crystalBox.attr("class", 'crystalBox');
    $(".crystals").append(crystalBox);
}