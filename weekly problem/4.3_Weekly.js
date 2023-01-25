// find big sum of two numbers
// A="1111111111"
// B="22222"

function bigNumbers(a,b){
    let result="";
    let carry=0;
    let numa=a.split("").reverse();
    let numb=b.split("").reverse();
    for(let i=0 ; i<Math.max(numa.length,numb.length) ; i=i+1){
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
let a="1111111111";
let b="22222";
console.log(bigNumbers(a,b));