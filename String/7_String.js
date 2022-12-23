// Split string into array of words

// Input:  my name is Vignesh Kumar 
// Output: 
// my
// name
// is
// Vignesh
// Kumar

const string="my name is Vignesh Kumar";
const words=string.split(" ");
for(let i=0 ; i<words.length ; i=i+1){
    console.log(words[i]);
}


