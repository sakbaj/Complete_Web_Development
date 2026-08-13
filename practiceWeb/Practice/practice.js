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

const a = 23;
const b = a;

b = 45;
console.log(a);
console.log(b);