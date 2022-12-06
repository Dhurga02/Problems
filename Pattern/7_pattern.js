// Pattern 7

// N = 5

// 1
// 1	2
// 1	2	3
// 1	2	3	4
// 1	2	3	4	5


const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output = ""

for(let i = 1 ; i<=n ; i=i+1){
    
    for(let j=1 ; j<=i ; j=j+1){

        output = output+j+" ";
    }
    output = output+"\n"
}
console.log(output);
