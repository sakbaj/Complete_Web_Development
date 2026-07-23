// let number = 40;
// let guess = 5;

// while (guess != 0) {
//     guess = parseInt(prompt("Guess a number") * 1)
//     if (guess == number) {
//         alert("Winner");
//         break;
//     }
// }

// High Order functions:

// function add(x, y, cb) {
//     let result = x + y;
//     cb(result);
// }

// add(23, 10, value => console.log(value));

// Arrays 

// let a = ['HTML', 'CSS', 'Javascript', 'Java'];
// console.log("Original Array: "+a);

// a.pop(); // It removes the element of the last index of the array.

// a.shift(); // It removes the element of the first index of the array.

// a.splice(2, 3); // It removes or replaces the element of the array.

// console.log("Updated Array: "+a);

// Methods in Arrays Using JavaScript

// const stuRoll = [220, 221, 222, 223, 224];

// console.log('A '+stuRoll);
// const newArray = stuRoll.splice(2, 4);
// console.log('B '+newArray);

// console.log(Array.isArray(true));

// let a  = ["HTML", "CSS", "JS", "React"];
// let s = a.toString(); // used to convert array into string
// console.log(s);

// let emp = {
//     name: "Saksham Bajpai",
//     iD: 653,
//     lastName: "Bajpai",
//     salary: "20 LPA"
// }

// console.log(delete emp.lastName);
// console.log(emp);

// let a = 23;
// let b = 45;
// let c = 34;

// console.log(Array.of(a, b, c));

// shift and unshift

const fruits = ["Watermelon", "Apple", "Banana", "Grapes", "Pomegranate"];

fruits.shift();

console.log(fruits);
