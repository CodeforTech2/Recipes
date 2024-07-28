// - pricing page
// - cart and logo symbol

let reset = document.getElementById('reset');

reset.onclick = function() {
    window.scrollTo(0 ,0);
}

// top.onclick = () => window.scrollTo({top: 0});

// start FreeCodeCamp projects part time

// console.log(favoriteAnimal('Labus'));

let exemple = "aU IESIT niste BIscUITI buni"

function capitalize(str) {
    let lowStr =  str.toLocaleLowerCase();
    return lowStr.replace(lowStr.charAt(0), lowStr.charAt(0).toUpperCase());
}
console.log(capitalize(exemple));

function lastLetter(str) {
    return str.charAt(str.length - 1);
}

// console.log(lastLetter(exemple))

// ==============================================================
// let num = prompt(parseInt("Put a number!"))
function game(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 === 0) {
            console.log("FizzBuzz!");
        } else if (i % 3 === 0) {
            console.log("Fizz!");
        } else if (i % 5 === 0) {
            console.log("Buzz!");
        }  else {
            console.log(i);
        }
    }
}

// game(5);

// ==============================================================
// Rock Paper Scissor
// - Its a game between human and computer, who has to chose between rock paper and scissors
// - human choise its set by me on a variable
// - computer choise it will be chosen by a function
// - then will have  playRound function, where will get both human and computer choise, and it will by passed by some conditionals
// - will have to store the score on 3 variables, one for human and one for computer and one for when it is a draw
// - if human wins the round, it will score 1 on his side, if computer wins it, will score 1 on his side, if its a draw the draw variable will get a score
// - the first who get to score number 3, will win the game.

let humanChoise = "rock";
let computerChoise = "paper";

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "rock" && computerChoise === "paper") {
        console.log("Computer won!");
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        console.log("Human won!")
    } else if (computerChoise === "rock" && humanChoise === "paper") {
        console.log("")
    }
    if (humanChoise === computerChoise) {
        console.log("it's a draw!");
    }
}

playRound(humanChoise, computerChoise);