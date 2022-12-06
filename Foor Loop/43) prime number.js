// Find number is prime or not 

// What is prime number ;

// Number is divisible by 1 and number itself
// Ex:

// 5 is prime number , because it is divisible by 1 and 5

// 13 id prime number , because it is divisible by 1 and 13

// 10 is not prime number because it is divisible by 1,2,5 and 10


const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Check prime number = "));

let isprime = true;

for(let i = 2 ; i <=n / 2 ; i = i + 1){

    if(n % i == 0){
        isprime = false;

          break;
    }
}

if(isprime == true){

    console.log(" is a prime number : ", n);

}else{

    console.log(" not a prime number : ", n);

}
