// Write a program to calculate profit or loss

const prompt = require("prompt-sync")();

const a = parseInt(prompt("enter the selling price = "));

const b = parseInt(prompt("enter the cost price = "));

if ( a > b ){
    console.log("profit is = ", a - b);

}else if ( b > a ){
    console.log("loss is = ", b - a );

}else{
    console.log(" no profit nor loss ");
}
