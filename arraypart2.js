// array part 2
// const marvel_heros =["spideman","Cap","Hawkeye"]
// const dc_heros =["superman","flash","batmnan"]
// // marvel_heros.push(dc_heros)
// console.log (marvel_heros);
// // console.log (marvel_heros[3][1]);

// ----------usning concat keywords-----------
const marvel_heros = ["spideman", "Cap", "Hawkeye"];
const dc_heros = ["superman", "flash", "batmnan"];

// concat() returns a NEW array
const all_heros = marvel_heros.concat(dc_heros);

console.log(marvel_heros); // Output: ["spideman", "Cap", "Hawkeye"] 
console.log(all_heros);    // Output: ["spideman", "Cap", "Hawkeye", "superman", "flash", "batmnan"]

// ----------usning spread keywords-----------

const all_new_hero=[...marvel_heros,...dc_heros];
console.log(all_new_hero)

// ----------usning flat keywords-----------

const other_Arr=[1,2,4,[7,4,3],5,[3,5,[3,9]]];
const real_arr=other_Arr.flat(Infinity)
console.log(real_arr)

// ----------convert string into an array -----------//
console.log(Array.isArray("Saksham"))
console.log(Array.from("Saksham"))

let score1,score2,score3;
score1=score2=score3=99;
console.log(Array.of(score1,score2,score3))