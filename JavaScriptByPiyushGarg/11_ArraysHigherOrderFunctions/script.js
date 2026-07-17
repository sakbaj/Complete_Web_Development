// High order functions in Arrays inside JS

const numbers = [1, 2, 3, 4, 5, 6, 7];

function double(n) {
    return n * 2;
}

let newArr = numbers.map(double);
console.log(newArr);
