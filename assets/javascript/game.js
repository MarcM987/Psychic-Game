// var input = confirm("Do You have a game save");

var game = {
    name: "HangMan",
    theme: "Technology",
    wins: 0,
    loses: 0,
    guesses: 6,
    wordBank: ["quantum","database", "programming", "html", "javascript", "hexadecimal", "binary", "computers"],
    wordBlanks: "",
    word: "",
    guessCount: 0,
    letter: '',
    lettersGuessed: "",

    letterGuess: function(letter){
        this.letter = letter;
        this.myWord(this.letter);
        ++this.guessCount;
    },

    myWord: function(letter){
        if(this.guessCount == 0){
            this.word = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
            this.writeBlank(this.word, letter);
        }        
    },

    writeBlank: function(word, letter){
        var wordArry = "";
        for(let i = 0; i < word.length; ++i){
            wordArry += "_";
            document.getElementById("Word").innerHTML += wordArry[i] + " ";
        }
        this.wordBlanks = wordArry;
        
    }

    

};

var gamesave = {
    wins: 0,
    loses: 0,
    currWordIndex: 0,

};

document.onkeydown = function(event){
    var letter = event.key.toLowerCase();
    game.letterGuess(letter);
    
    if(game.lettersGuessed.indexOf(letter) >= 0){
        console.log("You Already Guessed That!");
    }else{
        --game.guesses;
        document.getElementById("Guesses").innerHTML = game.guesses;
        game.lettersGuessed += letter + " ";
        document.getElementById("Letters").innerHTML = game.lettersGuessed;

    }
    if(game.guesses == 0){
        alert("You Lose!");
        location.reload();

    }
//     console.log(game.word);
//     if(game.word.indexOf(letter) >= 0){
//         game["wordBlanks"] = letter;
//         console.log(game.wordBlanks);
//         document.getElementById("Word").innerHTML = game.wordBlanks;
//     }
};



