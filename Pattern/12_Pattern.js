
// Pattern 12

// name = VICKY

// Output:

// V

// V     I 

// V     I      C

// V    I      C    K

// V     I      C    K      Y

const prompt = require("prompt-sync")();

const input = "VICKY";

string = "";

for(let i=0; i<input.length; i=i+1){

    for(let j=0;j<=i;j=j+1){

        string=string +` ${input[j]}`;

    }
    string=string+"\n";
}
console.log(string);
