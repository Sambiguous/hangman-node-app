var Word = require("./objects.js");
var art = require("./art.js");
var inq = require("inquirer");
var fs = require("fs");

var words;

fs.readFile("answers.JSON", "utf-8", function(err, data){
    if(err){
        console.log(err);
    };

    words = JSON.parse(data).songs;
});


art.title()

inq.prompt([
    {
        type: "confirm",
        message: "would you Like to play a game of Hangman?",
        name: "play"
    }
]).then(function(data){
    if(data.play){
        var index = Math.floor(Math.random() * words.length);
        var round = new Round(words[index]);
        round.letterPrompt(round);
    };
});

function Round(answer){

    this.word = new Word(answer);
    
    this.letterPrompt = function(self){
        art.hangman(self.word.guessesLeft);
        console.log("\n");
        self.word.print();

        inq.prompt([
            {
                type: "input",
                message: "Guess a letter.",
                name: "letter"
            }
        ]).then(function(data){
            self.word.guessLetter(data.letter);

            if(self.word.guessesLeft === 0){
                endGame("loss");
            }
            else if(self.word.allGuessed()){
                endGame("win");
            }
            else{
                self.letterPrompt(self);
            };
        });
    };
};

function endGame(winLoss){
    var message;

    if(winLoss === "win"){message = "Congratulations, you win!\nWould you like to play again?"}
    else{message = "Sorry, you Lose!\nWould you like to play again?"}

    inq.prompt([
        {
            type: "confirm",
            message: message,
            name: "again"
        }
    ]).then(function(data){
        if(data.again){
            var index = Math.floor(Math.random() * words.length);
            var round = new Round(words[index]);
            round.letterPrompt(round);
        }
    })
}

