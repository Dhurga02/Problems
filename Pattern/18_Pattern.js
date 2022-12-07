// Pattern 18

// N = 5

// 1	2	3	4	5
// 	2	3	4	5
// 		3	4	5
// 			4	5
// 				5

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

output = ""

for(let i=1 ; i<=n ; i=i+1){

    for(let j=1 ; j<=n ; j=j+1){

        if(j>=i){
            output = output+j
        }else{
            output = output+" "
        }
       
    }
    output = output+"\n"
}
console.log(output);