var inq = require("inquirer");
var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var Letter = function(value){
    this.value = value;
    this.display = "";
    this.guessed = false;

    this.setDisplay = function(){
        if(alpha.includes(this.value.toLowerCase())){
            this.display = " _";
        }
        else if(this.value === " "){
            this.display = "  ";
            this.guessed = true;
        }
        else{
            this.display = this.value;
            this.guessed = true;
        }

    }
    this.guess = function(){
        this.display = " " + this.value;
        this.guessed = true;
    };
    this.setDisplay();
};

var Word = function(word){
    this.value = word;
    this.guessesLeft = 6;
    this.guessed = [];
    this.letters = [];

    this.setLetters = function(){
        for(i in this.value){
            this.letters.push(new Letter(word[i]));
        };
    };

    this.print = function(){
        output = "";
        for(i in this.letters){
            output += this.letters[i].display;
        }
        console.log(output);
    };

    this.guessLetter = function(letter){
        if(this.guessed.includes(letter.toLowerCase())){
            console.log("'" + letter + "' has been guessed already.");
            return;
        };
        var correct = false;

        for(i in this.letters){
            if(letter.toLowerCase() === this.letters[i].value.toLowerCase()){
                this.letters[i].guess();
                correct = true;
            };
        };
        if(!correct){this.guessesLeft--}

        this.guessed.push(letter);
    };

    this.allGuessed = function(){
        for(var i in this.letters){
            if(this.letters[i].guessed === false){
                return false;
            }
        }
        return true;
    };

    this.setLetters();
};

module.exports = Word;