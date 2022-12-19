
// Get List of student names from user and store it in the array

// Enter total students: 4
// Enter Student 1: Vignesh
// Enter Student 2: Durga
// Enter Student 3: Kumar
// Enter Student 4: Vijay

const prompt = require("prompt-sync")();

let studentNames = [];

const n =parseInt(prompt("Enter total student :"));

for(let i=1 ; i<=n; i=i+1){
    let studentName= prompt("enter the student "+i+":");
      studentNames.push(studentName);
}

for(let i=0 ; i<studentNames.length  ; i=i+1){
    console.log(studentNames[i]);
}