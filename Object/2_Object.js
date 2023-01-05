// Get below information from user and create student object
// ID, Name, Email, Phone, Address - ( Street,  District, Pincode ) 

const prompt =require("prompt-sync")();
function Student(id, name, email, phone, address) {
  this.id = id;
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.address = address;
}

function createStudent() {
  let id = prompt("Enter the id: ");
  let name = prompt("Enter the name: ");
  let email = prompt("Enter the email: ");
  let phone = parseInt(prompt("Enter the phone number: "));
  let street = prompt("Enter the street: ");
  let district = prompt("Enter the district: ");
  let pincode = parseInt(prompt("Enter the pincode: "));
  let address = {
    street: street,
    district: district,
    pincode: pincode,
  }
  let student = new Student(id, name, email, phone, address);
  return student;
}
let newStudent = createStudent();
console.log(newStudent);