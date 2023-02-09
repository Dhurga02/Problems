
function findMedian(arr){
    let n=arr.length;
    for(let i=0 ; i<n-1 ; i=i+1){
        let min=i;
        for(let j=i+1 ; j<n ; j=j+1){
            if(arr[j]<arr[min]){
                min=j;
            }
        }
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
    }
    let median;
    if(n%2==0){
        let mid1=arr[n/2-1];
        let mid2=arr[n/2];
        median =(mid1+mid2)/2;
    }else{
        median= arr[Math.floor(n/2)];
    }
    return median;
}
let arr=[90,100,78,89,67];
console.log(findMedian(arr));