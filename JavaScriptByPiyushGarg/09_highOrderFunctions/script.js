// High order functions in JavaScript

function add(a, b, cb) {
    let result = a + b;
    cb(result);

    return () => console.log(result);
    
}

let resultFunction = add(2, 5, () => {});
resultFunction();



