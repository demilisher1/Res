// const Arr = [1,-4,7,12];
//
// function customR(callback, array) {
//     let result = 0;
//     for (let value of array) {
//         result = callback(result,  value)
//     }
//     return result;
// };
//
// function reducer(sum, current) {
//     debugger
//     if(current > 0){
//         return sum + current
//     } else {
//         return sum
//     }
// }
//
// const result = customR(reducer, Arr);
// console.log(result)