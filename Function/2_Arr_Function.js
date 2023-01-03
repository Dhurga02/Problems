// Create one numbers array, find total sum of array.

// Input: [1,2,3,4,5,6]

const Arr=[1,2,3,4,5,6,7,89];
function number(Array){
let sum=0;
for(let i=0 ; i<Array.length ; i=i+1){
    sum+=Array[i];
}
return sum;
}
console.log(number(Arr));