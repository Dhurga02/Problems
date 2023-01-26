// Find sum of two add big numbers and get number from user
const prompt = require("prompt-sync")();
let A = prompt("Enter the first number = ");
let B = prompt("Enter the second number = ");
function bigNumbers(A, B) {
    let result = "";
    let carry = 0;
    for (let i = 1; i < A.length || i < B.length; i = i + 1) {
        let a = 0;
        let b = 0;
        if (A.length >= i) {
            a = parseInt(A[A.length - i]);
        }
        if (B.length >= i) {
            b = parseInt(B[B.length - i]);
        }
        let sum = a + b + carry;
        if (sum > 9) {
            carry = 1;
        } else {
            carry = 0;
        }
        result = (sum % 10) + result;
    }
    if (carry > 0) {
        result = carry + result;
    }
    return result;
}
console.log(bigNumbers(A, B));