//  Pattern 1

//  1 1 1 1 1
//  2 2 2 2 2
//  3 3 3 3 3
//  4 4 4 4 4
//  5 5 5 5 5 

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" enter the number = "));

let output = ""

for (let i = 1 ; i <= n; i = i + 1){      

for (let j = 1 ; j <= n; j = j + 1){    

    output = output + i +" "; 
}
output = output + "\n";
}

console.log(output);
