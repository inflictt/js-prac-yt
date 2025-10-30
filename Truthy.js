// const useremail="saksham@ai"
const useremail=""
if (useremail){
    console.log("got the mail");
    
}else{
    console.log("no user mail logged");
    
}
//falsy values are:
// false,0,-0,BigInt=0n,"",null,undefined,NaN
// truthy vals are:
// "0","false"," ",[],{},function(){}

// nullish coalescing operator (??): null undefined
let val1 ;
// val1=90??11;
val1=null??11;
console.log(val1 );
// ternary
// condition ? true: False
const iceteaprice= 10
iceteaprice<=80 ? console.log("less than 80"): console.log("more than 80 ");

