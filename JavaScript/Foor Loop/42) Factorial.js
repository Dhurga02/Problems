// Factorial program

// Get number from user and find its factorial 

const prompt = require("prompt-sync")();

    const a = parseInt(prompt( " Enter the number "));

    let b = 1

    for (let i = a ; i >= 1 ; i = i - 1){

        b = b * i;
    }
console.log("the factorial is : ", b)

