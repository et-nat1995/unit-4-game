// Objects for stones.
var diamond = {
    value: 0
}

var emerald = {
    value: 0
}

var ruby = {
    value: 0
}

var purple = {
    value: 0
}

//  Player and randome score
var randomeScore = 0;
var playerScore = 0;

// wins and loses
var wins = 0;
var loses = 0;

// range for randomNumbers
var maxNum = 120;
var minNum = 19;

// to get clicks
var $gems = $(".gems");
// set wins and losses
var $wins = $("#wins");
var $loses = $("#loses");
// set random number
var $randomNum = $("#ranNumber");
// set player score.
var $curenScore = $("#playerScore");

// functions to get random numbers
function getRandomGenValue() {
    return Math.floor(Math.random() * 12) + 1;
}

function getRandomScore(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function reset() {

    // reseting all the variables
    randomeScore = getRandomScore(maxNum, minNum);
    diamond.value = getRandomGenValue();
    emerald.value = getRandomGenValue();
    ruby.value = getRandomGenValue();
    purple.value = getRandomGenValue();
    playerScore = 0;

    console.log(diamond.value);
    console.log(emerald.value);
    console.log(ruby.value);
    console.log(purple.value);


    $wins.text("Wins: " + wins);
    $loses.text("Loses: " + loses);

    $curenScore.text(playerScore);
    $randomNum.text(randomeScore);

}

$(document).ready(function () {

    // starts the game.
    reset();

    $gems.on("click", function () {

        switch ($gems.val()) {
            case "ruby":
                playerScore += ruby.value;
                break;
            case "diamond":
                playerScore += diamond.value;
                break;
            case "purple":
                playerScore += purple.value;
                break;
            case "emerald":
                playerScore += emerald.value;
                break;
        }

        console.log($gems.val());

        console.log(playerScore);

        $curenScore.text(playerScore);

        if (playerScore === randomeScore) {
            wins++;
            reset();
        }

        else if (playerScore > randomeScore) {
            loses++;
            reset();
        }
    });

});
