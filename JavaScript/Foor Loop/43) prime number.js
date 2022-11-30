// Find number is prime or not 

// What is prime number ;

// Number is divisible by 1 and number itself
// Ex:

// 5 is prime number , because it is divisible by 1 and 5

// 13 id prime number , because it is divisible by 1 and 13

// 10 is not prime number because it is divisible by 1,2,5 and 10

const prompt = require("prompt-sync")();

const b = parseInt(prompt(" Enter the prime number = "));

for (let i = 2 ; i <=b / 2 ; i = i + 1){
    if (b % i == 0 ){
        console.log(" not prime number ");
    }else {
        console.log(" prime number ");
    }
}

