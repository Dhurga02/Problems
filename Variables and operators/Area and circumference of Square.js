// Write a program to find Area and circumference of square 

const prompt = require("prompt-sync")();

const side = parseInt(prompt("Enter the side of Square = " ));

const Area = side * side
const Circumference = 4 * side

console.log("enter the area = ",Area , "\n enter the Circumference = ",Circumference);
