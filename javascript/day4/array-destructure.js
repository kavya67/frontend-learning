const colors = ["red", "green", "blue"];

//extract firstColor, secondColor

let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);

//skip elements and return blue

let [,,thirdColor] = colors;
console.log(thirdColor);

//swap elements
let a = 10;
let b = 20;

[a,b] = [b,a];

console.log(a,b);