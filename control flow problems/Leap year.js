// Find whether year is leap year or not
// Example 1
// Input: 2022
// Output: Not Leap Year
// Example 2
// Input: 2020
// Output: Leap Year
// Example 3:
// Input: 1900
// Output: Not Leap Year

const prompt = require("prompt-sync")();

const a = parseInt(prompt("enter the number = "));

if( a % 4 == 0 &&  a % 100!= 0){
    console.log(" leap year ", a);

}else{
    console.log(" Not Leap year ", a);
}
