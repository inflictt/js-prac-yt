// pura code kabhi bhi ek saath run nhi hona chahiye
// if 
if (false){
    // this will not be executed
}
if (2===2){
    console.log("2 is equal to 2 ")
}
const temp = 55
if (temp<51){
    console.log("True temp is lower");
    
}
else{
    console.log("no its not");
    
}

// short hand notation
const bal =150000
if (bal>5000) console.log("True balance is more");

// switch case
const month = 3
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feburary");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("august");
        break;
    case 9:
        console.log("september");
        break;
    case 10:
        console.log("October");
        break;

    default:
        console.log("incorrect month marked ... ");
        
        break;
}