//game logic
var Word = require('./Word.js');
var inquirer = require ('inquirer');


function Game () {
                //the following 2 lines comes from the site: npmjs.com (documentation)
                //Confirm - {type: 'confirm'}
                //Take type, name, message[, default] properties. default is expected to be a boolean if used.
inquirer.prompt ([{
    //the following is an object (this was build from the lines above)
    type: 'confirm',
    name: 'confirmation',
    message: 'Are you ready to play the game?'
}

]) .then(function(pizza){
//the value parameter can only be used between these {}
//i can call it value or pizza or anything
  //  console.log(pizza)
    //create a condition here
    if(pizza.confirmation === true){
        console.log("let's play the game");

//invoke the NEXT FUNCTION HERE
letter ()

    }
    else {console.log("Ok, please come back when you are ready to play the game")};
})
}


/////WRITE HERE THE FUNCTION (RANDOMLY SELECT THE WORD
/////SIMILAR TO THE FUNCTION ON LINE 6

function letter () {
            //the following comes from the site: npmjs.com (documentation)
            //Input - {type: 'input'}
            //Take type, name, message[, default, filter, validate, transformer] properties.
            inquirer.prompt ([{
        type: 'input',
        name: 'firstLetter',
        message: 'What is your first letter?',
        validate: function validateFirstLetter(letter){
            return letter!=='';
        }
    }])
    // inquirer.prompt(letter);
}


Game ();  //this line is to invoke the function game





//I COULDN'T FINISH THE CONSTRUCTORS (A FUNCTION THAT KIND OF RETURN SOME SORT OF OBJECT)
//constructors help us make the game

//array of options or words / and then - use Math.random to choose the index of that array
//check Hangman game

