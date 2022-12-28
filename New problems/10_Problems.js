// JavaScript Program to Find the Sum of Natural Numbers

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the natural number = "));
let a=0;
for(let i=1 ; i<=n ; i=i+1){
a=a+i;
}
console.log("The natural num is : ",a);