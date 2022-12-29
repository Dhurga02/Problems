// JavaScript Program to Check Armstrong Number

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));
let temp=n;
let sum=0;
    for(let i=n ; i>0 ; i=i-1){
    let num = temp%10;
    sum=sum+num**3;
    temp=parseInt(temp/10);
}
if(sum==n){
    console.log(n,"is an armstrong number ");
}else{
    console.log(n," is not an armstrong number ");
}
