// Pattern 16

// N = 5


// *	*	*	*	*

// *				*

// *				*

// *				*

// *	*	*	*	*

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

let output = ""

for(let i = 1 ; i<=n ; i = i + 1){

    for(let j = 1 ; j<=n ; j = j + 1){
        
if(i==1 || i==n || j==1 || j==n){
    
    output= output+"* ";
}
 else{
    output=output+"  ";
 }
 }
    
output = output + "\n";
}

console.log(output);

