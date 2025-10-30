// for of loop
// this is as type of array specific loop
// eg ["","",""]
// eg [{},{},{}]

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log(num);
}

const greet = "hello saksham";
for (const greets of greet) {
    console.log(greets);
       
}

// maps - hold correct order and is a key val pair unique val only
const map1 = new Map()
map1.set("state","Raj")
map1.set("country","india")
map1.set("singer","king")
console.table(map1)
for (const [key,val] of map1) {
    console.log(key,"-->",val);
    
}
// we cant apply forof loop on object so forin loop came into place
const myobj={
    js:"javascript",
    py:"python",
    java:"java",
    rb:"ruby"
}
for (const key in myobj) {
    console.log(key,"-->", myobj[key]);
    
}

