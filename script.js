
var availableInputs = [
    "R", "P", "S"
];
var Wins = 0;
var Losses = 0;
var Ties = 0;

if (window.confirm("Do you want to play rock paper scissors?"))  {
    playGame();
}

function playGame() {
 
    function equateInputs() {
        if (availableInputs.includes(userInput)) {
        } else {
window.alert("Only use R, P, or S. You dense ####.")}
    };
        var userInput = prompt("Choose R, P, or S");
        equateInputs();

        function getRandomNumber(max) {
            return Math.floor(Math.random() * max);
        };
        var rngComputer = getRandomNumber(3);
        console.log(rngComputer);
        var computerSecondChoice = availableInputs[rngComputer];
            window.alert("Computer chose " + computerSecondChoice);
            if (userInput === computerSecondChoice) {
                window.alert("It's a tie!");
                Ties++
                window.alert("Stats: Wins: " + Wins + " Losses: " + Losses + " Ties: " + Ties);

            } else if (userInput === "R" && computerSecondChoice === "S" || userInput === "S" && computerSecondChoice === "P" || userInput === "P" && computerSecondChoice === "R") {
                window.alert("You won.. impossible..");
                Wins++
                window.alert("Stats: Wins: " + Wins + " Losses: " + Losses + " Ties: " + Ties);

            } else {
                window.alert("You lost, and you suck. lol.");
                Losses++
                window.alert("Stats: Wins: " + Wins + " Losses: " + Losses + " Ties: " + Ties);
            }
            if (window.confirm("Want to play again?")) {
                playGame();
            } else {
        return 
        }
    };
