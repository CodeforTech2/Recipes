// - pricing page
// - cart and logo symbol

let reset = document.getElementById('reset');

reset.onclick = function() {
    window.scrollTo(0 ,0);
}

// top.onclick = () => window.scrollTo({top: 0});

// start FreeCodeCamp projects part time

const str = "Helo, ";
const str2 = `John!`;

// console.log(str + str2);

const mes = `${str}${str2}`;
console.log(mes);

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(text.charAt(text.length-1))

console.log(text.at(-2))
console.log(text.slice(5, 10));
console.log(text.toLocaleLowerCase());
console.log(str.concat(str2));

// alert (3 > 5);
// alert ("test" == "test");

let hour = 12;
let minute = 30;

if ( hour == 12 && minute == 30) {
    console.log("Este ora 12:30");
};


function favoriteAnimal(animal = 'Rex') {
    // return animal + " is my favorite animal!";
    console.log(` ${animal} is my favorite animal!`);
}

favoriteAnimal("Labus");
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

console.log(lastLetter(exemple))