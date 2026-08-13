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

const originalUser = {name: "Saksham", age: 20};
const newobj = {...originalUser};
newobj.age = 21;
console.log(originalUser.age);
console.log(newobj.age);
