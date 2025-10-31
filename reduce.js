// reduce = takes inital val in start only once
const mynums = [1,2,4]
const mytotl = mynums.reduce(function(acc,curr){
    return acc+curr
},0
)
console.log(mytotl);
