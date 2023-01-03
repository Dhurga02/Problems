// Create one array and find the middle element in the array. Assume array length is always odd number

// Arr = [ 1 , 2 , 3 , 4 ,5 , 6 , 7 ] 

const Arr = [1,2,3,4,5,6,7];
function middleNumber(array){
    let middle=Math.floor(array.length/2);
return array[middle];
}
console.log(middleNumber(Arr));