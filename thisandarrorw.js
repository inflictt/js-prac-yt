const user = {
    Username:"Inflict",
    price:999,
    welcomemsg:function(){
        // console.log(`${this.Username} : welcome to webpage`);
        
    }
}
console.log(user.welcomemsg)
user.welcomemsg()

// -------arrow function------//
const chai= ()=>{
    console.log(this);
    
}
chai()
