//  Bubble sort

function bubbleSort(arr){
    for(let i=0 ; i<arr.length ; i=i+1){
        for(let j=0 ; j<arr.length-1 ; j=j+1){
          if(arr[j]<arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }            
        }
    }
    return arr;
}
let number=[5,2,7,4,9,3,8,1,6];     
console.log(bubbleSort(number));