// Print table of n up to 10
// n is input get from user

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the n number = "));

 
for (let i = 1 ; i <= 10 ; i = i + 1 ){

    console.log( i + " = n = " + i * n );
}
