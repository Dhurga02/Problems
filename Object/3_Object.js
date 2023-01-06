// Get Students List from users and create array of student objects

const prompt=require("prompt-sync")();
function Student(id,name,email,phone,address){
    this.id=id;
    this.name=name;
    this.email=email;
    this.phone=phone;
    this.address=address;
}
function createStudent(){
    let id=prompt("Enter the id : ");
    let name=prompt("Enter the name : ");
    let email=prompt("Enter the email : ");
    let phone=parseInt(prompt("Enter the number : "));
    let street=prompt("Enter the street : ");
    let district=prompt("Enter the district : ");
    let pincode=parseInt(prompt("Enter the pincode : "));
    let address={
        street:street,
        district:district,
        pincode:pincode,
    }
    let student=new Student(id,name,email,phone,address);
    return student;
}
let Arr=[];
let newStudent=createStudent();
Arr.push(newStudent);
console.log(Arr);