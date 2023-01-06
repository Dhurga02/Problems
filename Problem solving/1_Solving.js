// Input: nums = [2,7,11,15], target.

const prompt=require("prompt-sync")();
const num=[2,7,11,15];
function checkNumber(num,target){
for(let i=0 ; i<num.length ; i=i+1){
    for(let j=1 ; j<num.length ; j=j+1){
        if(num[i]+num[j]==target){
            return [i,j];
        }
    }
}
}
const target = parseInt(prompt("Enter the number : "));
console.log(checkNumber([2,7,11,15],target));
