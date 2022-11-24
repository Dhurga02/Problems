// Write a program to find Area and circumference of Circle

const prompt = require("prompt-sync")();

const x = parseInt(prompt("Enter the Radius of circle = "));

const Area = 3.12 * x * x
const Circumference = 2 * 3.14 * x

console.log("Enter the area of circle = ",Area , "\n Enter the circumfernce of circle = ",Circumference );
