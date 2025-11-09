// promise has 3 custom states:
// 1. pending 
// 2. fulfilled 
// 3. rejected 

// fetch('https://something.com').then().catch().finally()
// creation 
const promiseOne = new Promise(function(resolve, reject) {
    // do async tasks
    // cryptography, db call
    setTimeout(() => {
        console.log("Async task completed");
        resolve();
    }, 1000);
});

promiseOne.then(function() {
    console.log("Promise consumed");
});

// Another example
new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task two");
        resolve();
    }, 1000);
}).then(function() {
    console.log("Async 2 resolved");
});

// Example with object
const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "King", email: "inflict@gmail.com" });
    }, 1000);
});

promisethree.then((user) => {
    console.log(user);
});

const promisefour = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    let error =false
    if(!error){
        resolve({username:"saksham",passowrd:"123"})
    }
else{
    reject("error:something is wrong")
}
   },1000) 
})
promisefour.then((user)=>{
    console.log(user);
    return user.username
}).then((name)=>{
console.log(name);

}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
    
})
const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true; // try changing this to false to test resolve case
        if (!error) {
            resolve({ username: "javascript", password: "!@#$" });
        } else {
            reject("Error: JS went wrong");
        }
    }, 1000);
});

async function consumepromisefive() {
    try {
        const response = await promisefive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumepromisefive();

// async function getalluser(){
//     try{
//     const response =  await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("Error: ",error);
        
//     } 
// }
// getalluser()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{return response.json()})
.then((data)=>{console.log(data);
})
.catch((error)=>{console.log(error);
})