
const prompt=require("prompt-sync")();
function find(arr){
    for(let i=0 ; i<arr.length ; i=i+1){
        let number= -1;
        for(let j=i+1 ; j<arr.length ; j=j+1){
        if(arr[j]>arr[i]){
            number=arr[j];
            break;
        }
    }
    console.log(arr[i]+" -> "+ number);
    }
}
const input=prompt(" Enter the number : ");
let arr=input.split(",").map(Number);
find(arr);
