// singleton
// Object.create
// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Saksham",
    "full name": "Saksham Bajpai",
    mySym: "mykey1",
    age: 18,
    location: "Lucknow",
    email: "saksham@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser.mySym);
