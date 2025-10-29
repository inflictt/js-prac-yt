// everything written in if is block scope and outside it is global scope
let song = "tu aake dekhle";
let Name; // 1. Declare 'Name' in the global scope

if (true) {
  Name = "lord"; // 2. Assign the value inside the block
  let age = 19;
  let song = "newlife";
  console.log(`inner block song : ${song}`);
  
}

console.log(Name); 
console.log(song); 