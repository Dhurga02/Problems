
let input="cool";
let output=[];
for(let i=0 ; i<input.length ; i=i+1){
    let char=input[i];
    if(output[char]){
        output[char]=output[char]+1;
    }else{
        output[char]=1;
    }
}
console.log(output);