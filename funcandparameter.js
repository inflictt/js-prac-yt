function saymyname(){
    console.log("krdollarSign")
}
saymyname()

let n1,n2;
n1=1
n2=2
function sum(n1,n2){
    return n1+n2
}

ans=sum(n1,n2)
console.log(ans);


function loginusermsg(username){
    if(username===undefined)
        {
            console.log("please enter a username !!");
            return

    }
    return `${username} just logged in !`
}
loginusermsg("saksham")


// console.log(loginusermsg("saksham"));
// console.log(loginusermsg(""));
console.log(loginusermsg());

