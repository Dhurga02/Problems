// Find how many magic numbers between 1 to N.

// Magic number is a number that is divisible by 3 and 5.

// Input:

// N = 100

// Output:

// Total 6 Magic numbers found. 

const prompt = require("prompt-sync")();

const n = parseInt(prompt("Enter the number = "));

let a = 0

for (let i =  1 ; i <= n ; i = i + 1){

    if  (i % 3 == 0 && i % 5 == 0){


        // console.log("Total magic number is : ",i );
        a = a + 1;
    }
       
}
   console.log("Magic number is : ",a);

   
