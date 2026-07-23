// Arrays In JavaScript

const marvelHeros = ["thor", "Ironman", "Spiderman"];

const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

// const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allHeros = [...marvelHeros, ...dcHeros]; // Spread Operator
console.log(allHeros);