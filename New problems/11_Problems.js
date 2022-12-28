// JavaScript Program to Print the Fibonacci Sequence

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));
let a=0,b=1;

for(let i=0 ; i<=n ; i=i+1){
    let c=a+b;
    a=b;
    b=c;
    console.log(c);
}
