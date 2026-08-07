// Practices In JavaScript
// Objects

const { use } = require("react");

// const student = {
//     name: "Saksham Bajpai",
//     rollno: 226,
//     email: 'sakshambajpaihdi@gmail.com',
//     Course: 'BCA',
//     section: 'D'
// }

// console.log(student.email);

// console.log(student["email"]);

// console.log(student.rollno);

// const keyName = "email";

// const stu = {
//     [keyName]: "sakshambajpaihdi@gmail.com"
// }
// console.log(stu);

// let x = 45;
// let y = "45";
// console.log(x==y); // It will perform comparison between these two.
// console.log(x===y);

// // Arrays
// let fruits = ["Apple", "Banana", "Cabbage", "Radish", "Aloo"];

// let mix = fruits.slice(2, 4); // starting: included, end: excluded

// console.log(mix);
// console.log(fruits);

// let a = ["HTML", "CSS", "JS"];

// for (let i=0; i<a.length; i++) {
//     console.log(a[i]);
// }

let a = [10, 20, 30, 40, 50];

a.splice(3, 2, 12, 24, 29);
// console.log(a);

// Output: 10, 20, 30, 12, 24, 29

// let girls = ["Priya", "Pooja"]; // Array 2
// let merge = boys.concat(girls); // It merges two arrays, then creates a single array of combining both.


// let arr = [10, 20, 25, 100, 40]; 
// console.log(arr.sort((a, b) => a - b));
// Expected Output: 

// Objects

const mySym = Symbol("key1");

const user = {
    name: "Saksham",
    "full name": "Saksham Bajpai",
    // [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "saksh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(user[mySym]);
