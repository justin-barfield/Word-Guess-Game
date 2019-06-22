var log = console.log;

var words = [
    {q: 'help', a: 'help'},
    {q: 'me', a: 'me'},
    {q: 'with', a: 'with'},
    {q: 'this', a: 'this'},
];

var test = ["help"];

//generate a random word from array
var generateRandomWord = function(){
    var randomNumber = Math.floor(Math.random() * words.length);
    return words[randomNumber].q;
    
};
// alert(generateRandomWord());

//write word on screen
var writeWord = function(){
    document.getElementById('generated-word').innerHTML = generateRandomWord();
};
writeWord();


//hide word from view (set text color to trasparent)
var hideWord = document.getElementById('generated-word').style.opacity = '1'; //0


//start game

//register keystrokes

document.onkeyup = function(event) {
    var letterPressed = event.key.toLocaleLowerCase();
    alert(letterPressed);
};

//compare keystrokes to word on screen
/* document.onkeyup = function(event) {
    var letterPressed = event.key.toLocaleLowerCase();
    var i = 0;
    var interval = setInterval(function(){
        
    })
    if(letterPressed ==)
} */

//if right, display letter


    //if all letters guessed, add 1 to score


//if wrong, -attempts available


    //if no attempts left, add 1 to losses, restart game with new word

