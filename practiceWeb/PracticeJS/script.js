// Practices In JavaScript
// Objects

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
console.log(a);

// Output: 10, 20, 30, 12, 24, 29