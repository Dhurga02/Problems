// JavaScript Program to Find the Factors of a Number

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Eneter the factor number = "));

for(let i=1 ; i<=n ; i=i+1){
    if(n%i==0){
        console.log(i);
    }
}
console.log("the factor number is : " +n);