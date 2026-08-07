// Objects

const mySym = Symbol("key1");

const stud = {
    name: "Saksham",
    "full name": "Saksham Bajpai",
    [mySym]: "myKey1",
    age: 20,
    location: "Jaipur",
    email: "saksh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(stud[mySym]);