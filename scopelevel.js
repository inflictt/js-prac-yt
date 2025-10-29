// nested scope

function one(){
    const username = "saksham"
    function two(){
        const website = "yt";
        console.log(username);
        
    }
    // console.log(website);//throws error as outside block scope
    // two() this was never executed
    two()
}
one()
//closure is where the inner / child fucntion can access parent function data but not vice versa