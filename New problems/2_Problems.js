// Javascript Program to Check if a Number is Odd or Even

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

if(n%2!=0){
    console.log("this is a odd number ");
}else{
    console.log("this is a even number ");
}