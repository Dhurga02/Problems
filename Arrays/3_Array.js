// Create one numbers array and get one number from user, print whether given number is in the array or not
// Arr = [1,2,3,4,5,6,7,8,9,10]

const prompt = require("prompt-sync")();

let number = [1,2,3,4,5,6,7,8,9,10];

const n = parseInt(prompt("Enter the number = "));

if(number.includes(n)){

    console.log(`is a array number `);
}else{

    console.log(`is not a array number `);
}

