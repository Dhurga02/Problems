// Given string is palindrome or not. What is palindrome? If the string is the same as the reverse string, it is palindrome.

// Input:  madam
// Output: Palindrome

const string="racecar";
let output="";
for(let i=string.length-1 ; i>=0 ; i=i-1){
    output=output+string[i];
}
if(string==output){
    console.log("it is a palindrome");
}else{
    console.log("not a palindrome");
}
