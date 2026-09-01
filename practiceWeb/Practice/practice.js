// Arrays in javaScript

let arr = [13, 39, 23, 53, 56, 51];

let new_arr = arr.splice(2, 4, 34, 45, 69);
// slice(): In this, It doesn't change the original array...
// splice(): In this, it modifies the original array...
console.log(new_arr);
console.log(arr);
