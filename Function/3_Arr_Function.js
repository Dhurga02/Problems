// Create one numbers array and get one number from user, print whether given number is in the array or not
// Arr = [1,2,3,4,5,6,7,8,9,10]
// Input 
// N- 5, Number found in array
// N-23 , number not found in the array

const prompt = require("prompt-sync")();
const n = parseInt(prompt("Enter the number = "));
const Arr=[1,2,3,4,5,6,7,8,9,10];
function number(n){
    if(Arr.includes(n)){
        console.log(n," it is found in array ");
    }else{
        console.log(n," it is not found in array ");
    }
}
number(n);