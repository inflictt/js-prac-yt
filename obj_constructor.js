// const tinderuser= new Object()
const tinderuser = {}
tinderuser.id="123abc";
tinderuser.Name="Lord";
tinderuser.isloggedin=false

// console.log(tinderuser)

const reguser = {
    email:"saksham@gmail.com",
    fullname:{
        username:{
            first:"saksham",
            last:"lodha"
        }
    }
}
// console.log(reguser.fullname?.username.first);


const obj1 = {1:"a",2:"b"}
const obj2 = {4:"d",3:"c"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1 , obj2)
const obj3 = {...obj1 ,...obj2}

console.log(obj3)