// Count the vowels from the given string. Vowels are ‘a’, ‘e’, ‘i’, ‘o’, ‘u’

// Input:   Vignesh
// Output:  Total vowels = 2

let string= "vignesh";
let Output =0;

for(let i=0 ; i<string.length ; i=i+1){
  if(string[i]=='a' ||string[i]=='e'||string[i]=='i'||string[i]=='o'||string[i]=='u'){
    Output=Output+1;
  }
}
console.log("total vowels = " + Output);