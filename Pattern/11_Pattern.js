// Pattern 11

// N = 5

// 5	5	5	5	5
// 4	4	4	4
// 3	3	3
// 2	2
// 1


const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output =""

for(let i=n ; i>=1 ; i=i-1){

    for(let j=1 ; j<=i ; j=j+1){

        output = output+i+" ";
    }
    output = output+"\n"
}
console.log(output);
