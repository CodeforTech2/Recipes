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