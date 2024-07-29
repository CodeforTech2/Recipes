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
// console.log(capitalize(exemple));

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
// - computer choise it will be chosen by a function that will chose random from the 3 options
// - then will have  playRound function, where will get both human and computer choise, and it will by passed by some conditionals
// - will have to store the score on 3 variables, one for human and one for computer and one for when it is a draw
// - if human wins the round, it will score 1 on his side, if computer wins it, will score 1 on his side, if its a draw the draw variable will get a score
// - the first who get to score number 3, will win the game.

let humanChoise = "rock";
// let humanChoise = prompt("ceva");
let humanScore = 0;
let computerScore = 0;

let computerChoise = function() {
    let num =  Math.floor(Math.random() * 3);
    if(num === 0) return "rock";
    if(num === 1) return "paper";
    if(num === 2) return "scissors";
};


// function playRound(humanChoise, computerChoise) {

//     if (humanChoise === "rock" && computerChoise === "paper") {
//         computerScore++;
//         console.log("Paper beats Rock! Computer won!");
//         console.log(computerScore);
//     } else if (humanChoise === "rock" && computerChoise === "scissors") {
//         humanScore++;
//         console.log("Rock beats scissors! Human won!");
//     } 

//     else if (humanChoise === "paper" &&  computerChoise === "rock") {
//         humanScore++;
//         console.log("Paper beats rock! Human won!")
//     } else if (humanChoise === "paper" && computerChoise === "scissors") {
//         computerScore++;
//         console.log("Scissors beats paper! Computer won!")
//     } 

//     else if (humanChoise === "scissors" &&  computerChoise === "rock") {
//         computerScore++;
//         console.log("Rock beats scissors! Computer won!")
//     } else if (humanChoise === "scissors" && computerChoise === "paper") {
//         humanScore++;
//         console.log("Scissors beats paper! Human won!")
//     }

//     if (humanChoise === computerChoise) {
//         console.log("it's a draw!");
//     }

//     if (humanScore === 3) {
//         console.log(`Human won the game! The score is ${humanScore} - ${computerScore}`)
//     } else if (computerScore === 3) {
//         console.log(`Computer won the game! The score is ${computerScore} - ${humanScore}`)
//     }

// }

// playRound(humanChoise, computerChoise());

// if (humanScore === 3) {
//     console.log(`Human won the game! The score is ${humanScore} - ${computerScore}`)
// } else if (computerScore === 3) {
//     console.log(`Computer won the game! The score is ${computerScore} - ${humanScore}`)
// }



let num1 = 0;



    function test1(humanChoise, computerChoise) {
        for (let i = 0; i < 10; i++) {
            if (num1 === 3) {
                console.log("num1 = 3");
                break;
            }

            if (humanChoise === "rock" && computerChoise === "paper") {
                num1 = i + 1;
                // console.log("Paper beats Rock! Computer won!");
                console.log(num1);
            }
        }
    }
   


test1(humanChoise, computerChoise());

let nr = 0;

for (let i = 0; i < 10; i++) {
    if ( i ===3) {break};
    // console.log("The number is " + i);
    nr = i + 1;
    // console.log(nr);

}