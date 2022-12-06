// Give Grades for student based on below condition
// Input: Total Marks
// Output:
// Total Mark is 100, print “A Grade”
// Total Mark is above 90 , print “B Grade”
// Total Mark is above 70 , print “C Grade”
// Total Mark is above 35 , print “D Grade”
// Total Mark is below 35 , print “Fail”


 const prompt = require("prompt-sync")();

 let a = parseInt(prompt("Enter the mark = "));


if(a >= 100 ){
    console.log(" A Grade ");

}else if(a > 90 ){
    console.log(" B Grade ");

}else if(a > 70 ){
    console.log(" C Grade ");

}else if(a >= 35 ){
    console.log(" D Grade ");

}else {
    console.log(" Fail ");
}
