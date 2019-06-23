var log = console.log;

var words = [
    ['h', 'e', 'l', 'p'],
    ['m', 'e'],
    ['s', 'o', 'l', 'v', 'e'],
    ['e','v','e','r','y','t','h','i','n','g'],
];

// var test = [
//     ["help", 'test'], 
//     ['test'],
// ];

//generate a random word from array

// log(generateRandomNumber());

// log(generateRandomWord.length);


// var randomWord = generateRandomWord.join(' ');
// log(randomWord);

// var testJoin = test.join(' ');

// write word and dashes on screen
// var writeWord = function(){
    //     document.getElementById('generated-word').innerHTML = randomWord;
    // };
    
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
    log(generateRandomWord);
    var generateRandomWord = words[randomNumber()];
    log(generateRandomWord);
    var wordID = document.getElementById('generated-word');
    
    function writeWord(){
        randomNumber();
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
        // alert('print')
    }
};
printDashes();


// function printDashes(){
//     for(var i = 0; i < generateRandomWord.length; i++){
//         var dashesID = document.getElementById('dashes');
//         var insertDashes = document.createTextNode(dashes[i]);
//         dashesID.classList.add('dashes-spacing');
//         dashesID.appendChild(insertDashes);
//         // alert('print')
//     }
// };

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

// var dashesID = document.getElementById('dashes');
//     for(var i = 0; i < generateRandomWord.length; i++){
//         var insertDashes = document.createElement('div');
//         insertDashes.classList.add('dashes-spacing');
//         insertDashes.textContent = dashes[i];
//         dashesID.appendChild(insertDashes);

var letterCount = 1;
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

    // Win update
    if(letterCount === generateRandomWord.length){
        wins++;
        writeWins();
        resetLettersUsed();
        lettersUsedID.innerHTML = '';
        wordID.innerHTML = '';
        dashesID.innerHTML = '';
        writeWord();
        printDashes();
        writeAttempts();
        letterCount = 1;
        return;
    };

    // Compare keystrokes to word on screen
    for(var i = 0; i < generateRandomWord.length; i++){
        
        if(generateRandomWord[i] === letterPressed){
            
            document.getElementById('letter' + i).style.opacity = '0';
            letterCount++;
            correct = true;

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
        letterCount = 1;
    };
    

    // while(letterCount === generateRandomWord.length){
    //     wins++;
    //     writeWins();
    //     lettersUsedID.innerHTML = '';
    //     wordID.innerHTML = '';
    //     dashesID.innerHTML = '';
    //     writeWord();
    //     printDashes();
    //     writeAttempts();
    //     letterCount = 0;
    //     break;
    // };

};

// Attempts left -1
// Letter used

//if right, display letter


    //if all letters guessed, add 1 to score


//if wrong, -attempts available


    //if no attempts left, add 1 to losses, restart game with new word

