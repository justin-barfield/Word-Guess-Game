var log = console.log;

var words = [
    ['h', 'e', 'l', 'p'],
    ['m', 'e'],
    ['s', 'o', 'l', 'v', 'e'],
    ['e','v','e','r','y','t','h','i','n','g'],
    ['g', 'e', 'o', 'r', 'g', 'i', 'a'],
    ['b', 'u', 'l', 'l', 'd', 'o', 'g', 's'],
    ['s', 'e', 'a', 's', 'o', 'n'],
    ['w', 'i', 'n', 's'],
    ['h', 'a', 'n', 'g', 'm', 'a', 'n'],
    ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'],
];

// Write Attempts available
var attempts;
var attemptsID = document.getElementById('attempts');

function writeAttempts(){
    attempts = 6;
    attemptsID.innerHTML = attempts
};
writeAttempts();


// Write Wins
var wins = 0;
var scoreID = document.getElementById('games-won');

function writeWins(){
    scoreID.innerHTML = wins;
};
writeWins();


// Write Losses
var losses = 0
var gamesLostID = document.getElementById('games-lost');

function writeLosses(){
    gamesLostID.innerHTML = losses;
};
writeLosses();


// Write Word;
var randomNumber = function(){
    return Math.floor(Math.random() * words.length);
};

var generateRandomWord = words[randomNumber()];
log(generateRandomWord);
var wordID = document.getElementById('generated-word');

function writeWord(){
    generateRandomWord = words[randomNumber()];
    for(var i = 0; i < generateRandomWord.length; i++){
        var newElement = document.createElement('div');
        newElement.classList.add('word-letters');
        newElement.setAttribute('id', 'letter' + i);
        newElement.textContent = generateRandomWord[i];
        // log(randomNumber());
        log(generateRandomWord);
        wordID.appendChild(newElement);
    };
};
writeWord();

// Print Dashes on page
var dashesID = document.getElementById('dashes');

function printDashes(){
    // Set dashes array equal to word length
    var dashes = [];
    for(var i = 0; i < generateRandomWord.length; i++){
        dashes.push('_ ');
    };

    // Write dashes
    for(var i = 0; i < generateRandomWord.length; i++){
        var insertDashes = document.createElement('div');
        insertDashes.classList.add('dashes-spacing');
        insertDashes.textContent = dashes[i];
        dashesID.appendChild(insertDashes);
    }
};
printDashes();


var letterCount = 0;
var usedLettersArray = [];

document.onkeyup = function(event) {
    var letterPressed = event.key.toLowerCase();
    
    if(letterPressed === 'f5'){
        return;
}
for(var i = 0; i < usedLettersArray.length; i++){
    if(usedLettersArray[i] === letterPressed){
        alert('Recurring letter')
        return;
    }
};

usedLettersArray.push(letterPressed);

function resetLettersUsed(){
    usedLettersArray = [];
};

// log(usedLettersArray);
// alert(letterPressed);

// Write letter on screen
var lettersUsedID = document.getElementById('used-letters');
// var appendLetters = lettersUsedID.createElement('div');
var appendLetters = document.createElement('span');
appendLetters.classList.add('letters-used');
appendLetters.textContent = letterPressed + " ";
lettersUsedID.appendChild(appendLetters);

var correct = false;
var sound = new Audio();
function playSound() {
    sound.src = 'cheer1.wav';
    sound.play();
}

// Compare keystrokes to word on screen
for(var i = 0; i < generateRandomWord.length; i++){
    
    if(generateRandomWord[i] === letterPressed){
        
        document.getElementById('letter' + i).style.opacity = '1';
        letterCount++;
        correct = true;
        // Win update
        if(letterCount === generateRandomWord.length){
            playSound();
            setTimeout(function() {
                alert('You win!');
                // Need to set timeout
                wins++;
                writeWins();
                resetLettersUsed();
                lettersUsedID.innerHTML = '';
                wordID.innerHTML = '';
                dashesID.innerHTML = '';
                writeWord();
                printDashes();
                writeAttempts();
                letterCount = 0;
                return;
            }, 100);
        };
    };
};

// Attempts count
if(correct !== true) {
    attempts--;
    attemptsID.innerHTML = attempts;
}

// Loss reset
if(attempts === 0){
    losses++;
    writeLosses();
    resetLettersUsed();
    lettersUsedID.innerHTML = '';
    wordID.innerHTML = '';
    dashesID.innerHTML = '';
    writeWord();
    printDashes();
    writeAttempts();
    letterCount = 0;
};

}