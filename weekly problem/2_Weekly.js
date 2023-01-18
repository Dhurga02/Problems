
const prompt=require("prompt-sync")();
function count(str){
    let output={};
    for(let i=0 ; i<str.length ; i=i+1){
        let char=str[i];
        if(char !==" "){
            if(output[char]){
                output[char]++;
            }else{
                output[char]=1;
            }
        }
    }
    console.log(output);
}
const input=prompt(" Enter the string : ");
count(input);