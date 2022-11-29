// Find the sum of all even numbers between 1 to n.

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the even number = "));

for( let i = 0 ; i <= n ; i = i + 2 ){

    console.log( i );
}
