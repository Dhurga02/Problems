// Create one array and find the smallest number in the array.

// Arr = [ 4, 5 , 1 , 2 , 10 ]

const Arr = [0,4,5,1,2,10];

output = Arr[0];

for(let i=1 ; i< Arr.length ; i=i+1){

    if(Arr[i]<output){
        output=Arr[i];
    }
}
console.log("the smallest num is ",output);