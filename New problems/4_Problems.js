// JavaScript Program to Check Prime Number

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));
if(n<=1){
    console.log(n +" it's not a prime number ");
}else if(n<=3){
console.log(n +" is a prime number ");
}else if(n%2==0 || n%3==0){
    console.log(n +" it's not a prime number ");
}else{
    console.log(n +" it's prime number ");
}