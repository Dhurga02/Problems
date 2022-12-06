// Write a program to find Area and circumference of Rectangle

const prompt = require("prompt-sync")();

const length = parseInt(prompt("Enter the length = "));

const width = parseInt(prompt("Enter the width = "));

const Area = length * width
const Circumference = 2 * ( length + width )

console.log("Area of rectangle = ", Area ,"\n Circumference  of rectangle = ", Circumference );
