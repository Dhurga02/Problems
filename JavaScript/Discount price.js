// Write a program to find the discount price. Input will be Total purchase amount, Output will print how much discount and final amount to pay. Discount = 20%

const prompt = require("prompt-sync")();

const Amt = parseInt(prompt("Enter the Amount = "));

const Disc = parseInt(prompt("Enter the Discount = "));

const x = Amt - (Amt * Disc )/100

console.log(" Total purchase amount = ", x );
