// JavaScript Program to Find HCF or GCD

const prompt = require("prompt-sync")();
const num1=prompt("Enter the numbre = ");
const num2=prompt("Enter the number = ");
let number=(num1,num2);
let hcf;
for(let i=1 ; i<=number ; i=i+1){
    if(num1%i==0 && num2%i==0){
        hcf=i;
    }
}
console.log("The HCF is : ",hcf);
