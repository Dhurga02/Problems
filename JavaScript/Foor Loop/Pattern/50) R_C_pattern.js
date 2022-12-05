
// Pattern 6

// Input:

// Row = 5

// Column = 4

// Output:

// 1	1	1	1
// 0	0	0	0
// 1	1	1	1
// 0	0	0	0
// 1	1	1	1

const prompt = require("prompt-sync")();

 const n = parseInt(prompt("enter the number = "));

const r = parseInt(prompt("Enter the row :"));

const c = parseInt(prompt("Enter the column  : "));

output = ""

for(let i=1 ; i<=r ; i=i+1){

    for(let j=1 ; j<=c ; j=j+1){

        output = output + i%2 +" ";
    }
    output = output+"\n"
}
console.log(output);
