// // singleton
// // Object.create
// // object literals

// const mySym = Symbol("key1")

// const jsUser = {
//     name: "Saksham",
//     "full name": "Saksham Bajpai",
//     mySym: "mykey1",
//     age: 18,
//     location: "Lucknow",
//     email: "saksham@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(jsUser.email);
// // console.log(jsUser["email"]);
// // console.log(jsUser["full name"]);
// // console.log(jsUser[mySym]);

// jsUser.email = "sakbaj@gmail.com";
// // Object.freeze(jsUser);
// jsUser.email = "dhc@gmail.com"
// // console.log(jsUser);

// jsUser.greeting = function () {
//     console.log("Hello Js user");
// }
// jsUser.greeting2 = function () {
//     console.log(`Hello Js user, ${this.name}`);
// }
// console.log(jsUser.greeting());
// console.log(jsUser.greeting2());

// Objects:  Singleton object

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Saksham",
    "full name": "Saksham Bajpai",
    // [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "saksh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
console.log(JsUser.mySym);
