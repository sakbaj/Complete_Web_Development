// // function In JavaScript

// function add(num1, num2) {
//     // console.log(a * b);
//     let ans = num1 + num2
//     return ans;
// }

// let a = add(3, 6);
// console.log(a);


// // parameters
// // function add(a, b) { // Here a and b are parameters
// //     console.log(a+b);
// // }

// // add(5, 10); // arguments are passed...


// function subt(x, y) {
//     return x - y;
// }

// console.log(subt(10, 79));

// function addNumbers(a, b) {
//     let ans = 0
//     for(let i = 0; i<arguments.length; i++) {
//         ans = ans + arguments[i];
//     }
//     return ans;
// }

// let result = addNumbers(1, 2, 23);
// console.log(result);

function addNumbersV2(...numbers) {
    let ans = 0;
    for (let i = 0; i < numbers.length; i++) {
        ans = ans + numbers[i]
    }
    return ans;
}

// Arrow functions
let result = addNumbersV2(1, 2, 23);
console.log(result);