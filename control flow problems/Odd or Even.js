// Find a number whether it is odd or even. Zero is neither odd or even

const prompt = require("prompt-sync")();

const a = parseInt(prompt("Enter the number = "));

if(a % 2 != 0 ){
    console.log(" Odd ");

}else if(a % 2 == 0 ){
    console.log(" Even ");
}
