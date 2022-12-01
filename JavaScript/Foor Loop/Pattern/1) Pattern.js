//  Pattern 1

//  1 1 1 1 1
//  2 2 2 2 2
//  3 3 3 3 3
//  4 4 4 4 4
//  5 5 5 5 5 

const prompt = require("prompt-sync")();

const n = parseInt(prompt("1"));

let output = " "

for (let i = 1 ; n <= 5; i = i + 1){

    for (let j = 1; n<=5; j = j + 1){

        output = output + i;
    }
}

console.log(output , "1 1 1 1 1 \n " + " 2 2 2 2 2 \n "+ " 3 3 3 3 3 \n " + " 4 4 4 4 4 \n " + " 5 5 5 5 5 ");
