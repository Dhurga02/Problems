// Insertion sort

function insertionSort(arr){
    for(let i=1 ; i<arr.length ; i=i+1){
        let current=arr[i];
        let j;
        for(j=i-1 ; j>=0 ; j=j-1){
            if(arr[j]>current){
                arr[j+1]=arr[j];
            }else{
                break;
            }
        }
        arr[j+1]=current;
    }
    return arr;
}
let number=[3,1,4,9,5,2,6,8];
console.log(insertionSort(number));