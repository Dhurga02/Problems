// Find the sum of two subtract big numbers

const prompt = require("prompt-sync")();

function bigNumbers(A, B) {
    let result = "";
    let borrow = 0;
    for (let i = 1; i <= A.length; i = i + 1) {
        let a = parseInt(A[A.length - i]);
        let b = parseInt(B[B.length - i]) || 0;
        let sum = a - b - borrow;
        if (sum < 0) {
            sum + 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result = sum + result;
    }
    return result;
}
let A = prompt("Enter the first number = ");
let B = prompt("Enter the second number = ");
console.log(bigNumbers(A, B));