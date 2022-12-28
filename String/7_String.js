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

for(let i=0 ; i<string.length ; i=i+1){
    if(string[i]==" "){
        words.push(temp);
        temp="";
    }else{
        temp=temp+string[i];
    }
}
words.push(temp);
console.log(words);
