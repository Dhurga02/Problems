// JavaScript Program to Check if the Numbers Have Same Last Digit

const prompt = require("prompt-sync")();
const num1 = prompt("Enter the first number : ");
const num2 = prompt("Enter the second number : ");
const num3 = prompt("Enter the third number : ");
let digit =num1%10 && num2%10 && num3%10;
// let digit2=num2%10;
// let digit3=num3%10;

if(digit==digit && digit==digit){
    console.log("the last digit are same ",num1,num2,num3);
}else{
    console.log("the are not same in last digit ",num1,num2,num3);
}
