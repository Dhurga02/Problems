// Women Marriage Eligibility Check. Age must be greater than 21

const prompt = require("prompt-sync")();

const a = parseInt(prompt("check eligible for marriahe or not =  "));

if(a > 35){
    console.log("over age ");

}else if(a >= 21 ){
    console.log("eligible for marriage ");

}else if(a <= 20){
    console.log("adult ");
}
