// var numbers = [4, 2, 5, 1, 3];
//
// numbers.sort(function(a, b) {
//     debugger
//     return a - b;
// });
// console.log(numbers); // [1, 2, 3, 4, 5]



const Arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function odd(array) {
    const oddArray = [];
for (let value of array) {
    const oddStatus =  value % 2 === 1;
    if (oddStatus) {
        oddArray.push(value)
    }
    oddArray.sort(function (a, b) {
        debugger
        return a - b
    })
}
return oddArray
}
const Result = odd(Arr);
console.log(Result)

