// Create one array and find the smallest number in the array.
// Arr = [ 4, 5 , 1 , 2 , 10 ]

const Arr=[4,5,1,2,10];
function findNumber(array){
    let output=Arr[0];
    for(let i=0 ; i<Arr.length ; i=i+1){
        if(Arr[i]<output){
            output=Arr[i];
        }
    }
    return output;
}
console.log(findNumber(Arr));