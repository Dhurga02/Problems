// JavaScript Program to Find the Largest Among Three Numbers

const num1 = 80;
const num2 = 90;
const num3 = 50;
let largest;
largest=num1;

if(num2>largest){
 largest=num2;  
}
if(num3>largest){
largest=num3;   
}
console.log("the largest number is : "+ largest);