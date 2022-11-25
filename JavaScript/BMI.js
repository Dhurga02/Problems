// Write a program to find BMI

const prompt = require("prompt-sync")();

const Weight = parseInt(prompt("Enter the Weight = "));

const Height = parseInt(prompt("Enter the Height = "));

const BMI = Weight / (Height * Height)

console.log("BMI is =  ",BMI);
