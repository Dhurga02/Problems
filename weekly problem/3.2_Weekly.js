// Find second largest element in the array 

const prompt=require("prompt-sync")();
function secondLargest(arr){
    if(arr.lenght<2)
return null;
let num=[0];
    let num1= -Infinity;
    for(let i=0 ; i<arr.length ; i=i+1){
        if(arr[i]>num){
          num1=num;
          num=arr[i];
        }else if(arr[i]>num1){
            num1= arr[i];
        }
    }
    return num1;
}
let arr=[1,2,3,4,5,6,7,8,9];
console.log(secondLargest(arr));