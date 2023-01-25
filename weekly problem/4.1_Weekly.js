
// Find sum of two big numbers 

// A = "9999"
// B = "1111"
const prompt=require("prompt-sync")();
function bigNumbers(a,b){
let result="";
let carry=0;
let numa=a.split("").reverse();
let numb=b.split("").reverse();
for(let i=0 ; i<Math.max(numa.length,numb.length); i=i+1){
    let num1=numa[i]?parseInt(numa[i]):0;
    let num2=numb[i]?parseInt(numb[i]):0;
    let sum=num1+num2+carry;
    carry=Math.floor(sum/10);
    result=(sum%10)+result;
}
    if(carry>0){
        result=carry+result;
    }
    return result;
}
let a ="1010101010";
let b ="1111111111";
console.log(bigNumbers(a,b));