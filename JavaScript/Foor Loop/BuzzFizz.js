// FizzBuzz Problem

// Print 1 to N as follows:
// If number is divisible by 3 , print “Fizz”
// If number is divisible by 5, print “Buzz”
// If number is divisible by both 3 and 5, print “FizzBuzz”
// Otherwise print the number

const prompt = require("prompt-sync")();

const n = parseInt(prompt(" Enter the divisible num = "));

for( let i = 1 ; i <= n ; i = i + 1 ){
  
if(i % 5 == 0 && i % 3 == 0 ){

    console.log(" FizzBuzz ");

}else if( i % 5 == 0 ){

    console.log(" Buzz ");

}else if( i % 3 == 0 ){

    console.log( " Fizz ");

}else{

  console.log( i );
}
}
