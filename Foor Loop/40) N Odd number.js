// Find the sum of all odd numbers between 1 to n.

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the odd numbers = "));

let a = 0

for( let i = 1 ; i <= n ; i = i + 1 ){

    if( i %2 !=0 ){
     
        a = a + i;
    }
}
console.log(" Total odd number is : ", a );
