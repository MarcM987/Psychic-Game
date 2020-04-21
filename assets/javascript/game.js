var input = prompt("Do You have a game save");

var game = {
    name = "HangMan",
    theme = "Technology",
    wins = 0,
    loses = 0,
    guesses = 6,
    wordbank = ["quantum","database", "programming", "html", "javascript", "hexadecimal", "binary", "computers"],
    wordGuess = " ",

};

var gamesave = {
    wins = 0,
    loses = 0,
    currWordIndex = 0,

};