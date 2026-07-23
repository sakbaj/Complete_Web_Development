// Arrays In JavaScript

const marvelHeros = ["thor", "Ironman", "Spiderman"];

const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros]; // Spread Operator
// console.log(allHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);


console.log(Array.isArray("Saksham"));
console.log(Array.from("Saksham"));
console.log(Array.from({name: "Saksham"}));