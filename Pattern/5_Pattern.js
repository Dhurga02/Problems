
// Pattern 5

// N = 5

// 1	2	3	4	5
// 1	2	3	4	5
// 1	2	3	4	5
// 1	2	3	4	5
// 1	2	3	4	5


const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output = ""

for(let i = 1 ; i <= n ; i = i + 1){

    for(let j = 1 ; j <= n ; j = j + 1){

        output = output + j + "  "; 
    }
    output = output + "\n"
}
console.log(output);
