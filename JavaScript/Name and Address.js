// Write program to get name and address from user and print in the output

const prompt =  require("prompt-sync")();

const Name = prompt("enter your name : " );

// console.log("your name is ", name);

const Address = prompt("enter your address : " );

console.log("Hello "+ Name ,"you are in "+ Address);
