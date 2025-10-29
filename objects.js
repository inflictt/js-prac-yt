// two way of declaration - object,literal
// singleton - apne tareeke ka ek he object hai , hamesha constructor se banega

// Object Literals
// Object.create this is the way of constructor and always singleton


// Object Literals
const jsUser = {
  Name: "saksham",
  "full": "lodha",
  Alive: true
};
// console.log(jsUser);

// Object.freeze(jsUser)
jsUser.Name = "LordInflict";

// console.log(jsUser.Name);
// console.log(jsUser.Alive);
// console.log(jsUser["full"]);

jsUser.greeting = function() { 
  console.log(`Hello jsuser ${this.Name}`);
};

console.log(jsUser.greeting()); // This just shows the function definition
// console.log(jsUser.greeting());