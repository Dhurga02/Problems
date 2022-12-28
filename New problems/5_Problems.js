// JavaScript Program to Print All Prime Numbers in an Interval

const prompt = require("prompt-sync")();

const n =parseInt(prompt("Enter the number = "));

for (let i = 2; i <=n; i=i+1) {
    let prime = true;
    for (let j = 2; j<i; j=j+1) {
      if (i%j==0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(i);
    }
  }