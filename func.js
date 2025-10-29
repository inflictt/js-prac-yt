// lecture 4
// intitally a global execution content is created
// consisting of 2 components one is memory and other is code componenet
// memory will be allocated as x be undefined adn a,b will be fulll function stored not undefined
//  console logs check for localy memory space like in function a() it looks for x in locally so it gets and prints
var x= 1;
console.log(x);

a();
b();

function a(){
    var x=10;
    console.log(x);
}
function b(){
    var x=100;
    console.log(x);
}