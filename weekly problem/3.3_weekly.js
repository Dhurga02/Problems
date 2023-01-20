// Remove 'K' elements from given array
function removeElement(a,k){
        let Array=[];
        for(let i=k ; i<a.length ; i=i+1){
    Array.push(a[i]);
}
return Array;
}
a=[1,2,3,4,5];
k=1;
console.log(removeElement(a,k));