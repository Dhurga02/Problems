// Write a program to find the total mark of a student. Total Subjects - Tamil, english and math

const prompt = require("prompt-sync")();

const Tamil = parseInt(prompt("Tamil ="));

const English = parseInt(prompt("English ="));

const Maths = parseInt(prompt("Maths ="));

const Total = Tamil + English + Maths

console.log("Enter the total marks = " + Total);
