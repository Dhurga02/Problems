// Bubble sort

function bubbleSort(arr){
    let n=arr.length;
    for(let i=0 ; i<n ; i=i+1){
        for(let j=0 ; j<n-1 ; j=j+1){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
    }
    }
    return arr;
}
let number=[3,1,4,5,9,6,2];
console.log(bubbleSort(number));