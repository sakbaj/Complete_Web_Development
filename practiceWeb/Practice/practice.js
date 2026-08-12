// // objects

// First Way to define Objects in jS.
// const obj = {
//     name: "Saksham",
//     course: "BCA",
//     email: "saksh@gmail.com",
//     rollNo: 226
// }

// console.log(obj["email"]);

// Second Way to define Objects in jS.

// Syntax: let obj_name = new Object();
// let obj = new Object(); // Using Constructor method...
// obj.course = "BCA";

// console.log(obj.course);

const student = {
    name: "Saksham",
    age: 21,
    address: {
        city: "Hardoi",
        pincode: 241001
    }
}

console.log(student.address.pincode);
