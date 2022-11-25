// Find a number whether it is Positive or negative or zero

const prompt = require("prompt-sync")();

const a = parseInt(prompt("Enter the number = ")); 

if (a > 0 ){
    console.log("positive ");

}else if(a == 0 ){
    console.log("Netural ");

}else if(a < 0 ){
    console.log("Negative ");
}
