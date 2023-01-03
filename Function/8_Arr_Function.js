// Get a list of numbers from users. Find the smallest ( minimum ) and largest ( maximum ) number in the array.

const prompt=require("prompt-sync")();
const n = parseInt(prompt("Enter the number = "));
function findNumber(n){
    let numbers=[];
    let min=numbers;
    let max=numbers;
    for(let i=1 ; i<=n ; i=i+1){
        let number=prompt(" The number is : ");
        numbers.push(number);
    }
    for(let i=0 ; i<numbers.length ; i=i+1){
        let num =numbers[i];
        if(num>max){
            max=num;
        }else if(num<min){
            min=num;
        }
    }
    console.log(" the maximum number is : ",max);
    console.log(" the minimum number is : ",min);
}
findNumber(n);