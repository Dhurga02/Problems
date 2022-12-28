// JavaScript Program to Find the Factorial of a Number

const prompt = require("prompt-sync")();

const a = parseInt(prompt( " Enter the number = "));

let b = 1

for (let i=a; i>=1 ; i=i-1){

    b = b*i;
}
console.log("the factorial is : "+ b)