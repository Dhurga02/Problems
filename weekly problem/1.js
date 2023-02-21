// Find difference between two times

// Input:
//      StartTime: "8:30"
//      End Time: "13:30"

const prompt=require("prompt-sync")();
const startTime= prompt("Enter the start time :");
const endTime=prompt("Enter the end time :");
let startHour=0;
let startMinute=0;
let endHour=0;
let endMinute=0;
for(let i=0 ; i<startTime.length ; i=i+1){
    let digit=startTime[i];
    if(digit==":"){
        startMinute=parseInt(startTime.slice(i+1));
        break;
    }
    startHour=startHour*10+parseInt(digit);
}
for(let i=0 ; i<endTime.length ; i=i+1){
    let digit=endTime[i];
    if(digit==":"){
        endMinute=parseInt(endTime.slice(i+1));
        break;
    }else if(!parseInt(digit)){
        console.log("Invalid end time");
        break;
    }
    endHour=endHour*10+parseInt(digit);
}
if(endHour>23||endMinute>59){
    console.log("Invalid end time");
}else{
let totalMint=(endHour*60+endMinute)-(startHour*60+startMinute);
let hours=Math.floor(totalMint/60);
let mints=totalMint%60;
console.log("Difference = ",hours,"Hours"+":"+mints,"Minutes");
}