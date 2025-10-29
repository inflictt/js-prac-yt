const num = 400;
console.log(num);

// -----making force NUMBER as number type----//
const age = new Number(15.9213400);
console.log(age);

console.log(age.toString().length)

// precision value like zeero afteer . 
console.log(age.toFixed(2))

// using precision as function
console.log(age.toPrecision(3))

// usnig localestring give in US format 
let hund = 15000000;
console.log(hund.toLocaleString());
