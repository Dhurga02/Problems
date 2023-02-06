// write a program to sort an array

function sortArray(arr){
    return arr.sort(function(a,b){
        return a-b;
    });
}
let number=[5,3,1,6,9,2,7,4,8];
console.log(sortArray(number));