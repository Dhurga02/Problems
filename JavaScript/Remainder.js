// Write a program to create two number variables and print its Remainder ( % )

const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Enter your first number = " ));
const num2 = parseInt(prompt("Enter your second number = " ));

console.log("Remainder is = ", num1 % num2);
