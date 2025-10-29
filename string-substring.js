// declaring string using object 
const gameName= new String("Inflict Codes");
console.log(gameName);

// -----Substring----//
// substring need slicing to be used but no negaitve values will be used instead start from 0
const newString = gameName.substring(0,5)
console.log(newString);

// -----slicing----//
//  .slice can have negative denoting from backwards
const lastString = gameName.slice(-5,13)
console.log(lastString);

// -----trim----//
const New = "    one     "; 
console.log(New);
console.log(New.trim());
// removes blank spaces adn line terminators from start to end


// -----replace----//
const url = "inflict%20.com";

console.log(url.replace("%20","_"));

// -----split----//

console.log(gameName.split("c"));
