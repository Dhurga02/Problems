
function selectionSort(arr){
    let n=arr.length;
    for(let i=0 ; i<n ; i=i+1){
        let min=i;
        for(let j=i+1 ; j<n ; j=j+1){
            if(arr[j]>arr[min]){
                min=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    return arr;
 }
 let number=[3,5,1,4,8,7,2];
 console.log(selectionSort(number));
