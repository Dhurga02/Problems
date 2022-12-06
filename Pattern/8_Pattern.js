// Pattern 8

// N = 5

// 1	2	3	4	5
// 1	2	3	4
// 1	2	3
// 1	2
// 1

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output = ""

for(let i=n ; i>=1 ; i=i-1){

    for(let j=1 ; j<=i ; j=j+1){

        output = output +j+" "
    }
    output = output + "\n"
}
console.log(output);
