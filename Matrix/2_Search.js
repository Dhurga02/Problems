// search the element in a row and column

const prompt=require("prompt-sync")();
function checkTheNumber(arr,x){
    let m=arr.length, n=arr[0].length;
    for(let i=0 ; i<m ; i=i+1){
        for(let j=0 ; j<n ; j=j+1){
            if(arr[i][j]==x)
                return true;
            }
        }
        return false;
    }
let x=parseInt(prompt("Enter the number = "));
let arr=[[0,6,8,9,11],
        [20,22,28,29,31],
        [36,38,50,61,63],
        [64,66,100,122,128]];
        if(checkTheNumber(arr,x)){
            console.log("yes");
        }else{
            console.log("no");
        }

