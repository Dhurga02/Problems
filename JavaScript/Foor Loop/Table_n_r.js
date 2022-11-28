// Print table of n up to R
// n is input get from user
// R is input get from user

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the n number = "));

const r = parseInt(prompt(" Enter the r number = "));

for (let i = 1 ; i <= r ; i = i + 1 ){
  
    console.log( i + " = n = " + i * n );

}
