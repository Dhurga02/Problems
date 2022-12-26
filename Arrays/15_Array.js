// Remove non-vowels from the string

// Input: Codewithvicky
// Output: oeii

const string="vignesh";
let output=""

for(let i=1 ; i<string.length ; i=i+1){
    if("aeiouAEIOU".includes(string[i])){
        output=output+string[i];
    }
}
console.log(output);
