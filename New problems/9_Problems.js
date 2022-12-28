// JavaScript Program to Make a Simple Calculator

const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Enter the number = "));
const num2 = parseInt(prompt("Enter the number = "));
const operator = prompt("enter the operator : ", "+,-,*,/");
let a;

if(operator=='+'){
    a=num1+num2;
}else if(operator=='-'){
    a=num1-num2;
}else if(operator=='*'){
    a=num1*num2;
}else{
    a=num1/num2;
}
console.log(num1,operator,num2,"=",a);