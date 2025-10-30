const mynums = [1,2,3,4,5,6,7,8,9,90]
let newnums = mynums.filter((num)=> num > 4)
console.log(newnums);

// chaining of funcs
const newnumss=mynums.map((num)=>num*10)
.map((num)=>num+1)
console.log(newnumss);
