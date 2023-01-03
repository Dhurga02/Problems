// Create one array and find the biggest number in the array
// Arr = [ 4, 5 , 1 , 2 , 10 ]

const Arr=[4,5,1,2,10];
function findNumber(Array){
    let output=Arr[0];
    for(let i=0 ; i<Arr.length ; i=i+1){
        if(Arr[i]>output){
            output=Arr[i];
        }
    }
    return output;
}
console.log(findNumber(Arr));