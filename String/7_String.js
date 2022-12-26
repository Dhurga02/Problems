// Split string into array of words

// Input:  my name is Vignesh Kumar 
// Output: 
// my
// name
// is
// Vignesh
// Kumar

const string="my name is Vignesh Kumar";
const words = []

let temp = ""

for(let i = 0 ; i < string.length; i++) {
    if(string[i] == ' ') {
        words.push(temp);
        temp = "";
    } else {
        temp += string[i];
    }
}
if(temp.length > 0) { 
    words.push(temp);
}
console.log(words);


