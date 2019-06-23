var log = console.log;

var words = [
    ['h', 'e', 'l', 'p'],
    ['m', 'e'],
    ['s', 'o', 'l', 'v', 'e'],
    ['e','v','e','r','y','t','h','i','n','g'],
];

var test = ["help", 'test', 'test'];

//generate a random word from array
var generateRandomNumber = Math.floor(Math.random() * words.length);

var generateRandomWord = words[generateRandomNumber];
// log(generateRandomWord);


var randomWord = generateRandomWord.join(' ');

// write word and dashes on screen
// var writeWord = function(){
//     document.getElementById('generated-word').innerHTML = randomWord;
// };
// writeWord();

var wordID = document.getElementById('generated-word')
for(var i = 0; i < randomWord.length; i++){
    var newElement = document.createElement('div');
    newElement.classList.add('word-letters');
    newElement.setAttribute('id', 'letter' + i);
    newElement.textContent = randomWord[i];
    log(randomWord[i]);
    wordID.appendChild(newElement);
}

// var wordID = document.getElementById('generated-word')
// for(var i = 0; i < test.length; i++){
//     var newElement = document.createElement('div');
//     newElement.classList.add('word-letters');
//     newElement.setAttribute('id', 'letter' + i);
//     newElement.textContent = test[i];
//     log(test[i]);
//     wordID.appendChild(newElement);
// }

// Write Attempts available
var attempts = 6;
var attemptsID = document.getElementById('attempts');
attemptsID.innerHTML = attempts

// Set dashes array equal to word length
var dashes = [];
for(var i = 0; i < generateRandomWord.length; i++){

    dashes.push('_ ');
    
};

// Write dashes
function printDashes(){
    for(var i = 0; i < generateRandomWord.length; i++){
        var dashesID = document.getElementById('dashes');
        var insertDashes = document.createTextNode(dashes[i]);
        dashesID.appendChild(insertDashes);
        // alert('print')
    }
};
printDashes();

// function setAttempts(){

//     if(randomWord.length <= 7){

//         attemptsID.innerHTML = 3;

//     } else {

//         attemptsID.innerHTML = 6;

//     }
    
// };
// setAttempts();

// alert(dashes);

//hide word from view (set text color to trasparent)
// var hideWord = document.getElementById('generated-word').style.opacity = '0'; //0


//start game

//register keystrokes


document.onkeyup = function(event) {
    var letterPressed = event.key.toLowerCase();
    // alert(letterPressed);

    //compare keystrokes to word on screen
    for(var i = 0; i < generateRandomWord.length; i++){
        if(generateRandomWord[i] === letterPressed){
            
            document.getElementById('letter' + i).style.opacity = '0';
            alert('yay');
            var correct = true;
            
        }   
    }
};

// Attempts left -1
// Letter used

//if right, display letter


    //if all letters guessed, add 1 to score


//if wrong, -attempts available


    //if no attempts left, add 1 to losses, restart game with new word

