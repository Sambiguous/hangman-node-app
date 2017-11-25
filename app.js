var Word = require("./objects.js");
var art = require("./art.js");
var inq = require("inquirer");

var test = "Harry Potter and the Prisoner of Azkaban"
art.title()

inq.prompt([
    {
        type: "confirm",
        message: "would you Like to play a game of Hangman?",
        name: "play"
    }
]).then(function(data){
    if(data.play){
        var round = new Round(test);
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
                console.log("You Lose!");
            }
            else if(self.word.allGuessed()){
                console.log("You Win!");
            }
            else{
                self.letterPrompt(self);
            };
        });
    };
};

