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
// basically its like ternary opr in python
let val1 ;
// val1=90??11;
val1=null??11;
console.log(val1 );
