// Check the valid or invalid IP Address.

const prompt=require("prompt-sync")();
function ipAddress(ip){
    let part=ip.split(".");
    if(part.length !==4){
        return false;
    }
    for(let i=0 ; i<part.length ; i=i+1){
        if(isNaN(part[i]) || part[i]<0 || part[i]>255 || part[i]==""){
            return false;
        }
    }
    return true;
}
let input=prompt(" Enter the IP Address : ");
if(ipAddress(input)){
    console.log(input+ " is a valid IP Address ");
}else{
    console.log(input+ " is a invalid IP Address ");
}
