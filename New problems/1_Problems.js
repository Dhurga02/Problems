// Javascript Program to Check if a number is Positive, Negative, or Zero

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

if(n>0){
    console.log("it's is positive num ");
}else if(n<0){
    console.log("it's is a negative num ");
}else{
    console.log("it's is a zero ");
}