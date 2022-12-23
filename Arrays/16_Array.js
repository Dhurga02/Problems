// Remove vowels from the string

// Input: Codewithvicky
// Output: cdwthvcky

const string="DHURGA";
let output=""

for(let i=0 ; i<string.length ; i=i+1){
if(string[i]=='a' ||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
}else if(string[i]=='A' ||string[i]=='E'||string[i]=='I'||string[i]=='O'||string[i]=='U'){
}else{
output=output+string[i];
}
}
console.log(output);