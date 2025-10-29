// dates - months start from 0 to 11
// let mydate= new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toLocaleString())


// -------Declaring date by myself----//
// let myNewdate= new Date(2025,11,29);
// console.log(myNewdate)
// console.log(myNewdate.toString())
// console.log(myNewdate.toLocaleDateString())
// console.log(myNewdate.toISOString())
// console.log(myNewdate.toLocaleString())

// -------Specific format Declaring date by myself----//
let myNewdate= new Date("2025-01-29");
console.log(myNewdate)
console.log(myNewdate.toString())
console.log(myNewdate.toLocaleDateString())
console.log(myNewdate.toLocaleString())


// -------timestamps---//
let mytimestampbe= Date.now()
console.log(myNewdate.getTime());

// -------we can deep dive a sinlge function using curlybraces ---//

myNewdate.toLocaleDateString('default',{
    weekday:"long",
})