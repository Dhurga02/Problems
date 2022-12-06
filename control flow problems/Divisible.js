// Find whether number is divisible by 5

const prompt = require("prompt-sync")();

const a = parseInt(prompt("Enter the number = "));

if (a % 5 == 0){
    console.log("Yes , Divisible by 5 ");

}else{
    console.log("No, Not Divisible by 5 ");
}
