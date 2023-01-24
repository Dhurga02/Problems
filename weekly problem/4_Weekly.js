// separate the even and odd number
// Array A = [1,2,3,4,5,6,7,8,9]

let a=[1,2,3,4,5,6,7,8,9];
let Even=[];
let Odd=[];
for(let i=0 ; i<a.length ; i=i+1){
    if(i%2==0){
    Even.push(a[i]);
    }else{
        Odd.push(a[i]);
    }
}
console.log(Even);
console.log(Odd);