// Loops In JavaScript
// For loop: if you know how many times to use loop

// for (let i = 0; i <= 10; i+=2) {
//     console.log("Saksham Bajpai " + i);   
// }

/*
    You
                                       House
*/

// let ip = 50;
// let house = 50;

// while(ip != house) {
//     ip = ip + 1;
//     console.log("Step taken "+ ip);
// }

// Do-while loop
// do {
//     ip = ip + 1;
//     console.log("Step taken "+ ip);
// } while (ip <= house);


// Guess The input

let number = 40;
let guess = 5;

// do {
//     guess = parseInt(prompt("Guess a number") * 1)
//     if (guess == number) {
//         alert("Winner")
//         break;
//     }
// } while (guess != 0);

while (guess != 0) {
    guess = parseInt(prompt("Guess a number") * 1)
    if (guess == number) {
        alert("Winner");
        break;
    }
}