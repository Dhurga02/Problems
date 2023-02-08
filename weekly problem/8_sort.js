// Insertion sort

function insertionSort(arr){
    let j;
    for(let i=1 ; i<arr.length ; i=i+1){
        let current=arr[i];
        for(j=i-1 ; j>=0 ; j=j-1){
            if(arr[j]<current){
                arr[j+1]=arr[j];
            }else{
                break;
            }
        }
        arr[j+1]=current;
    }
    return arr;
}
let number=[3,6,1,4,8,2,5,9];
console.log(insertionSort(number));