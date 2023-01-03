// Get List of student names from user and store it in the array

const prompt=require("prompt-sync")();
const n =parseInt(prompt("Enter the total student = "));
function students(n){
    let Arr=[];
    for(let i=1 ; i<=n ; i=i+1){
        let student = prompt(" student names are : ");
        Arr.push(student);
    }
    for(let i=0 ; i<Arr.length ; i=i+1){
        console.log(".",Arr[i]);
    }
}
students(n);