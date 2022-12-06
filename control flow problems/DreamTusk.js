// Dreamtusk problem
// Input: number
// Output:
// Print “Dream” If number is divisible by 3
// Print “Tusk” if number is divisible by 5
// Else Print “DREAMTUSK”

const prompt = require("prompt-sync")();

const a = parseInt(prompt("enter the number = "));

if( a % 5 == 0 ){
    console.log(" Tusk ");

}else if( a % 3 == 0 ){
    console.log(" Dream ");

}else{
    console.log(" DREAMTUSK ");
}
