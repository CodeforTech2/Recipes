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
console.log("test" != "test");
console.log(2 > 3);

let num1 = 3;
let num2 = 5;

if (num1 > num2) {
    console.log("That's correct!");
} else {
    console.log("That's wrong!");
}

if (num1 > 2 || num2 > 10) {
    console.log( "Logical si True!");
} else {
    console.log("Logical si False!");
}

let hour = 12;
let minute = 30;

if ( hour == 12 && minute == 30) {
    console.log("Este ora 12:30");
};

