//  Pattern 13

//  N = 5
 
//  1    2    3    4      5
 
//  2    4    6    8     10
 
//  3    6    9    12   15
 
//  4    8    12   16   20
 
//  5    10   15   20  25

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the number = "));

output = ""

for(let i =1 ; i<=n ; i=i+1){

    for(let j=1; j<=n ; j=j+1){

     
        output = output+(i*j)+"  ";

    }
    output = output+"\n"
}
console.log(output);

