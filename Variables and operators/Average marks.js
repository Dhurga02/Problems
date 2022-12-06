// Write a program to find the average mark of a student. Total Subjects - Tamil, english , and math

const prompt = require("prompt-sync")();

const tamil = parseInt(prompt("tamil = "));

const english = parseInt(prompt("english = "));

const math = parseInt(prompt("math = "));

const total = (tamil + english + math)/3

console.log("average is = "+ total);
