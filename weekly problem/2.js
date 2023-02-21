// write a program to reverse number
// Input: 
// 123
// Output:
// 321

let num=123;
let reversed=0;
for(let i=num ; i>0 ; i=Math.floor(i/10)){
    reversed=(reversed*10)+(i%10);
}
console.log(reversed);