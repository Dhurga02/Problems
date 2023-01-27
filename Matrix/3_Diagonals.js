// javascript Program to print the Diagonals of a Matrix

const prompt = require("prompt-sync")();
function firstDiagonals(x, n) {
    let output = "";
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < n; j = j + 1) {
            if (i == j) {
                output = output + x[i][j];
                output = output + " ";
            }
        }
    }
    console.log(" The first diagonals is : " + output);
}
function secondDiagonals(x, n) {
    let output = "";
    for (let i = 0; i < n; i = i + 1) {
        for (let j = 0; j < n; j = j + 1) {
            if ((i + j) == (n - 1)) {
                output = output + x[i][j];
                output = output + " ";
            }
        }
    }
    console.log(" The second diagonals is : " + output);
}
let n = prompt("Enter the number = ");
let a = [[1, 2, 3, 4],
[5, 6, 7, 8],
[1, 2, 3, 4],
[5, 6, 7, 8]];
firstDiagonals(a, n);
secondDiagonals(a, n);