// for loops 
array=[0,1,2,3,4,5,6,7,8,9,90]
for (let index = 0 ; index<array.length;index++)
{
    const elem = array[index];
    console.log(elem)
}
let arr1=["saksham","prerit","dhruv"]
    for(let index= 0 ;index<=arr1.length;index++){

        const elem = arr1[index];
        if (index==3){
            console.log("exiting...");
            break;
        }
        console.log(elem)

    }


