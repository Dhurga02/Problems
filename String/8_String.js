// Reverse the words in the sentence

// Input:

// My name is Vignesh kumar

// Output:

// yM eman si hsengiV ramuk

const sentence = "My name is vignesh kumar";

const words = []

let temp = ""

for(let i = 0 ; i < sentence.length; i++) {
    if(sentence[i] == ' ') {
        words.push(temp);
        temp = "";
    } else {
        temp += sentence[i];
    }
}
if(temp.length > 0) { 
    words.push(temp);
}
for (let i = 0; i < words.length; i++) { 
  let word = words[i];
  let reversedWord = '';
  for (let j = word.length - 1; j >= 0; j--) { 
    reversedWord += word[j];
  }
  words[i] = reversedWord;
}
console.log(words); 