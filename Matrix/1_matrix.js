// how to create matrix in js

let arr = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]];
for (let i = 0; i < 3; i = i + 1) {
    let s = "";
    for (let j = 0; j < 4; j = j + 1) {
        s = s + (arr[i][j] + " ");
    }
    console.log(s);
}