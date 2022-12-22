// Reverse the given string 

// Input: Vignesh
// Output:hsengiv

const prompt = require("prompt-sync")();

const a = "Vignesh";

let output =""

for(let i = a.length-1 ; i>=0 ; i=i-1){
    output=output+a[i];
}
console.log(output);
 