// var input = confirm("Do You have a game save");

var game = {
    name: "HangMan",
    theme: "Technology",
    wins: 0,
    loses: 0,
    guesses: 6,
    wordBank: ["quantum","database", "programming", "html", "javascript", "hexadecimal", "binary", "computers"],
    wordGuess: "",
    word: "",
    guessCount: 0,

    letterGuess: function(letter){
        alert("You guessed: " + letter);
        this.letter = letter;
        this.myWord(this.letter);
        ++this.guessCount;
    },

    myWord: function(letter){
        if(this.guessCount == 0){
            word = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
        }
        this.writeWord(word, letter);
    },

    writeWord: function(word, letter){
        var wordArry = "";
        for(let i = 0; i < word.length; ++i){
            wordArry += " _ ";
            if(word.indexOf(letter) == i){
                wordArry[i] = letter;
            }
        }
        alert(word);
        document.getElementById("Word").innerHTML = wordArry;
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
};

