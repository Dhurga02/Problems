// Remove 'K' elements from given array
const prompt=require("prompt-sync")();
function removeElement(a,k){
    let Array=[];
    for(let i=k ; i<a.length ; i=i+1){
        Array.push(a[i]);
    }
    return Array;
}
let a=[1,2,3,4,5]
let k=parseInt(prompt("Enter the element : "));
console.log(removeElement(a,k));