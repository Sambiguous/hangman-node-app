
function title(){
    console.log(" ____  ____       _       ____  _____   ______  ____    ____       _       ____  _____");
    console.log("|_   ||   _|     / \\     |_   \\|_   _|.' ___  ||_   \\  /   _|     / \\     |_   \\|_   _|"); 
    console.log("  | |__| |      / _ \\      |   \\ | | / .'   \\_|  |   \\/   |      / _ \\      |   \\ | |");  
    console.log("  |  __  |     / ___ \\     | |\\ \\| | | |   ____  | |\\  /| |     / ___ \\     | |\\ \\| |"); 
    console.log(" _| |  | |_  _/ /   \\ \\_  _| |_\\   |_\\ `.___]  |_| |_\\/_| |_  _/ /   \\ \\_  _| |_\\   |_ ");
    console.log("|____||____||____| |____||_____|\\____|`._____.'|_____||_____||____| |____||_____|\\____|");
    console.log("");
};
                                                                                   
function hangman(guessesLeft){
    if(guessesLeft === 6){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |");
        console.log("  |")
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\")
    }
    else if(guessesLeft === 5){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |")
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\")
    }
    else if(guessesLeft === 4){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |        |")
        console.log("  |        |");
        console.log("  |        | ");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\")
    }
    else if(guessesLeft === 3){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |        |")
        console.log("  |       /|");
        console.log("  |      / |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\")
    }
    else if(guessesLeft === 2){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |        |")
        console.log("  |       /|\\");
        console.log("  |      / | \\");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\")
    }
    else if(guessesLeft === 1){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |        |")
        console.log("  |       /|\\");
        console.log("  |      / | \\");
        console.log("  |        |");
        console.log("  |       /");
        console.log("  |      /");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\") 
    }
    else if(guessesLeft === 0){
        console.log("  __________");
        console.log("  |        |");
        console.log("  |       ( )");
        console.log("  |        |")
        console.log("  |       /|\\");
        console.log("  |      / | \\");
        console.log("  |        |");
        console.log("  |       / \\");
        console.log("  |      /   \\");
        console.log("  |");
        console.log(" / \\");
        console.log("/   \\") 
    }
};

module.exports = {
    title: title,
    hangman: hangman
}