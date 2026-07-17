// Number

let balance = 120;
let anotherBalance = new Number(120)

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof(balance));
// console.log(typeof(anotherBalance));

// boolean
let isActive = true
let isReallyActive = new Boolean(true) // not recommended

// null and undefined
// let firstName = null;
// let lastName = undefined
// console.log(firstName);
// console.log(lastName);

// String

let myString = "Hello"
let myString1 = 'hold'
let userName = 'saksham'

let oldGreet = myString + ' saksham';
// console.log(oldGreet);


let greetMessage = `Hello ${userName} !`;
let demoOne = `Value is ${2 * 3}`;
// console.log(demoOne);


let sm1 = Symbol("saksham")
let sm2 = Symbol("saksham")

console.log(sm1 == sm2);

