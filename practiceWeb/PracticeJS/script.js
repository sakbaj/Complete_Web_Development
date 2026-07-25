// Practices In JavaScript
// Objects

const student = {
    name: "Saksham Bajpai",
    rollno: 226,
    email: 'sakshambajpaihdi@gmail.com',
    Course: 'BCA',
    section: 'D'
}

// console.log(student.email);

// console.log(student["email"]);

// console.log(student.rollno);

const keyName = "email";

const stu = {
    [keyName]: "sakshambajpaihdi@gmail.com"
}
console.log(stu);

