// Find the sum of all even numbers between 1 to n.

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the number "));

let a = 0

for (let i = 1 ; i <= n ; i = i + 1){
   
    if(i %2 == 0){

        a = a + i;
    }
}
console.log(" Total even number is : ", a);
