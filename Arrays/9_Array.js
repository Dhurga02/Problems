// Get a list of numbers and search element from the user. Print whether the search element is in the given list.

// Example 1:

// Enter total numbers: 5
// Enter 5 numbers: 1
// 2
// 3
// 4
// 5
// Enter search element: 3
// The element 3 is found at index 2.

const prompt = require("prompt-sync")();

let numbers = [];

const n = parseInt(prompt("Enter total number : "));

for(let i=1 ; i<n ; i=i+1){
    let number = prompt("Enter number : ");
    numbers.push(number);
}

let a = prompt("Enter search element : ");

let index = numbers.indexOf(a);

if(index!=-1){
    console.log("The element "+a,"is found at index "+index);
}else{
    console.log("The element "+a,"is not found in the list ");
}