// write a program to sort an array

function sortArray(arr){
    let sort=arr.length;
    for(let i=0 ; i<sort ; i=i+1){
        for(let j=0 ; j<sort-1 ; j=j+1){
            if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
let number=[5,3,1,6,9,2,4,8];
console.log(sortArray(number));
