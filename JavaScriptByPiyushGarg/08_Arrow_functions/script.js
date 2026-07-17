// Arrow functions in JavaScript
// 1. Syntax

// const sayHello = () => {
//     console.log("Hi");
// }

// // const add = (a, b) => {
// //     return a+b;
// // }

// const addV2 = (a, b) => a+b; // One-liner
// console.log(addV2(34, 5));

// const addNumbers = (...nums) => {
//     console.log(nums);
// }

// addNumbers(1, 2, 3, 4, 5);

// Hoisting

// sayHey();

// function sayHey() {
//     console.log("Hey bro");
// }

// This keyword

const obj = {
    value: 20,
    myfunction: function(){
        console.log("Value is "+this.value);
    }
}

obj.myfunction();