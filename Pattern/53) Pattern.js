// Pattern 9

// N = 5

// 5	4	3	2	1
// 5	4	3	2
// 5	4	3
// 5	4
// 5

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output = ""

for(let i =1 ; i<=n ; i=i+1){

    for(let j=n ; j>=i ; j=j-1){

        output = output+j+" "
    }
    output = output+"\n"
}
console.log(output);
