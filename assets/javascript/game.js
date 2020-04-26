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
        this.wordBlanks = document.getElementById("Word").innerHTML;
        
    }

    

};

// var gamesave = {
//     wins: 0,
//     loses: 0,
//     currWordIndex: 0,

// };
var letArry = [["", 0], ["", 0]];
document.onkeydown = function(event){
    var letter = event.key.toLowerCase();
    game.letterGuess(letter);
    
    if(game.lettersGuessed.indexOf(letter) >= 0){
        // alert("You Already Guessed That!");
    }else if(game.word.indexOf(letter) >= 0){
    }
    else{
        --game.guesses;
        document.getElementById("Guesses").innerHTML = game.guesses;
        game.lettersGuessed += letter + " ";
        document.getElementById("Letters").innerHTML = game.lettersGuessed.toUpperCase();

    }
    if(game.guesses == 0){
        alert("You Lose!");
        ++game.loses;
        game.guesses = 6;
        game.guessCount = 0;
        game.lettersGuessed = "";
        document.getElementById("Guesses").innerHTML = game.guesses;
        document.getElementById("Letters").innerHTML = game.lettersGuessed;

    }

    console.log(game.word);
    if(game.word.indexOf(letter) >= 0){
        document.getElementById("Word").innerHTML = "";
        for(let i = 0; i < game.wordBlanks.length; ++i){
            if(game.word.indexOf(letter) == i && (letArry[i][0] == "")){
                letArry[i][0] = letter;
                letArry[i][1] = i;
            }
            if(letArry[i][1] == i){
                console.log(letArry[i][1]);
                document.getElementById("Word").innerHTML += letArry[i][0];
            }else{
                document.getElementById("Word").innerHTML += " _ ";
            }
        }
    }

    
};
