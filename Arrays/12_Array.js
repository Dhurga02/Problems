// Search character in string. Print whether it found or not

// Input: 

// String: Vignesh
// Key: g

const prompt = require("prompt-sync")();

let string = "vignesh";
let key ='h';
let i;

for(i=0 ; i<string.length ; i=i+1){
if(string[i]==key){
    console.log(key +" found at index "+i );
    break;
}
}
if(i==string.length){
    console.log(" not found");
}
