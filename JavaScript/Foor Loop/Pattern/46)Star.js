// Pattern 2

// N = 5

// * 	*	*	*	*
// *	*	*	*	*
// *	*	*	*	*
// *	*	*	*	*
// *	*	*	*	*

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

let output = ""

for(let i = 1 ; i<=n ; i = i + 1){

    for(let j = 1 ; j<=n ; j = j + 1){

        output = output +" *  ";
    }
output = output + "\n";
}
console.log(output);
