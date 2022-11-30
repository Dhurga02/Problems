// Find the sum of all natural numbers between 1 to n.

const prompt = require("prompt-sync")();

const n = parseInt(prompt());

let x = 0

for( let i = 1 ; i <=n ; i = i + 1 ){

    x = x + i;
}

console.log(" The n number is : ", x)
