// // objects

// First Way to define Objects in jS.
// const obj = {
//     name: "Saksham",
//     course: "BCA",
//     email: "saksh@gmail.com",
//     rollNo: 226
// }

// console.log(obj["email"]);

// Second Way to define Objects in jS.

// Syntax: let obj_name = new Object();
// let obj = new Object(); // Using Constructor method...
// obj.course = "BCA";

// console.log(obj.course);

// const settings = {theme: "dark"};

// const {theme, fontSize = '16px'} = settings;

// console.log(fontSize);

const userProfile = {id: 107, name: "Saksham Bajpai"};
const userSetting = {id: 226, theme: "dark"}

const {id: profileID, name} = userProfile;
const {id: settingsID, theme} = userSetting;

// console.log(profileID);
// console.log(settingsID);

// const originalUser = {name: "Saksham", age: 20};
// const copy = {...originalUser};
// copy.age = 21;
// console.log(originalUser.age);
// console.log(copy.age);

// const basicInfo = {name: "Saksham Bajpai", age: 20};
// const locationInfo = {city:"Hardoi", state: "UttarPradesh"}

// const fullProfile = {...basicInfo, ...locationInfo};
// console.log(fullProfile);

// object copy

// const obj1 = {age: 20, id: 101};
// const obj2 = {...obj1};

// obj2.id = 105; // copy of an object

// console.log(obj1);
// console.log(obj2);

// Object (Pass by reference)

// const a = 23;
// const b = a;

// b = 45;
// console.log(a);
// console.log(b);

// Objects(Pass by reference): in this changes will happen to both
// const obj1 = {name: "Saksham Bajpai"};
// const obj2 = obj1;

// obj2.name = "Ayush Bajpai";
// console.log(obj1.name);

// Objects initialisation:

// const user1 = {
//     name: "Saksham",
//     age: 20,
//     rollNo: 226,
//     "full name": "Saksham Bajpai",
//     email: "sakshambajpaihdi@gmail.com"
// }

// console.log(user1["email"]);

// programs using JavaScript.

// const mySym = Symbol("key1");

// const stud = {
//     mySym: "This is a string key",
//     [mySym]: "This is a symbol key"
// }

// console.log(stud.mySym);
// console.log(stud[mySym]);


const obj = {name: "Saksham",
     age:20}
console.log(obj.name);
