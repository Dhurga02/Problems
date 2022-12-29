// JavaScript Program to Find LCM

const prompt = require("prompt-sync")();
const num1 = prompt("Enter the first number : ");
const num2 = prompt("Enter the second number : ");
let lcm,i;
for(i=1 ; i<=num1*num2 ; i=i+1){
    if(i%num1==0 && i%num2==0){
        lcm=i;
        break;
    }
}
console.log("LCM is : ",i);