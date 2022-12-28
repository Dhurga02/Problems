// JavaScript Program to Display the Multiplication Table

const prompt = require("prompt-sync")();

const a = parseInt(prompt("Enter the number : "));
const b = parseInt(prompt("enter the b number : "));

for(let i=1 ; i<=b ; i=i+1){
    console.log(i+" = ",a," = "+i*a);
}