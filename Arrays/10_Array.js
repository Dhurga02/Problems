// Two sum problem 

// Input: 

// Arr = [ 1, 3, 4 , 8, 6 ]

// Target = 9

// Output: 

// 1 + 8 = 9 function twoSum(arr, target)         

// 3 + 6 = 9


const prompt = require("prompt-sync")();

const arr = [1,3,4,8,6];
const target = 9;

for(let i=0 ; i<arr.length ; i=i+1){
    const num1 = arr[i];
    for(let j=i+1 ; j<arr.length ; j=j+1){
        const num2 = arr[j];
 if(num1 + num2 == target){
             console.log(`${num1} + ${num2} = ${target}`);
     }
 }
}
console.log(`no found pair`);
