// // arrays - are resizeable 
// // const myArr=[0,1,2,3,4,5,true,"saksham"];
// // console.log(myArr[0]);
// // // it creates shallow copies mota - mota heap

// const myarr1= new Array(0,0,0,5,3);
// // console.log(myarr1);


// // ------Arr Push -------
// myarr1.push(6,9,7);//values are being appendend
// console.log(myarr1);

// // ------Arr pop -------
// myarr1.pop();//values are being popped from last index by default
// console.log(myarr1);

// // ------Arr unshift -------
// myarr1.unshift(1,9);//values are being added in the start moving all the elements
// console.log(myarr1);
 
// // ------Arr shift -------
// myarr1.shift();//values are being deleted where unshift adds
// myarr1.shift();//values are being deleted where unshift adds
// myarr1.shift();//values are being deleted where unshift adds
// myarr1.shift();//values are being deleted where unshift adds
// myarr1.shift();//values are being deleted where unshift adds
// console.log(myarr1);

// ------Arr includes -------
console.log(myarr1.includes(6));

// ------Arr Slice  -------
console.log("A",myarr1);
const myn1 = myarr1.slice(1,3)
console.log("---------");

console.log(myn1);



// ------Arr splice -------tampers the original and last index is also included
console.log("A",myarr1);
const myn2 = myarr1.splice(1,3)
console.log("---------");

console.log(myn2);
