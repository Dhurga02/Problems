// Write a program to find Simple Interest.
// Simple Interest = P * N * R / 100
// P = Principle
// N = Number of years
// R = Rate of interest per annum

const prompt = require("prompt-sync")();

const P = parseInt(prompt("Principle = "));

const N = parseInt(prompt("Number of years = "));

const R = parseInt(prompt("Rate of interest per annum = "));

const SI = P * N * R /100

console.log("Enter the Simple Interest = ", SI );
