// JavaScript Program to Check Prime Number

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));
let prime=true;

for(let i=2 ; i<n ; i=i+1){
    if(n%i==0){
        prime=false;
        break;
    }
}
if(prime){
    console.log(n+" is a prime number ");
}else{
    console.log(n+" is not a prime number ");
}